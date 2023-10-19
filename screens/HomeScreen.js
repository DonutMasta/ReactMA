import { React, useState, useEffect } from "react";
import { View, Button, StyleSheet, AppState } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Counter from "../components/Counter";

const HomeScreen = ({ navigation }) => {
  const load = async () => {
    try {
      const cnt = await AsyncStorage.getItem("currentCount");
      const num = JSON.parse(cnt);
      if (num != null) {
        console.log("loaded value");
        setCurrentCount(num);
      } else {
        console.log("no current count");
      }
    } catch (e) {
      console.error("failed to load count ");
    }
  };

  const save = async (count) => {
    try {
      await AsyncStorage.setItem("currentCount", JSON.stringify(count));
    } catch (e) {
      console.error("Failed to save count.", e);
    }
  };

  const [currentCount, setCurrentCount] = useState(0);
  useEffect(() => {
    let subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );
    load();
    return () => {
      subscription.remove();
    };
  }, []);

  const handleAppStateChange = (newState) => {
    console.log(newState);
    if (newState === "active") {
      load();
    } else if (newState === "inactive") {
    }
  };

  const showDetails = () => {
    navigation.push("Details", { count: currentCount });
  };

  const countChanged = (cnt) => {
    console.log("the current count is ", cnt);
    setCurrentCount(cnt);
    save(cnt);
  };

  return (
    <View style={styles.containerView}>
      <Counter onCountChanged={countChanged} count={currentCount} />
      <Button onPress={showDetails} title="Go to Details" />
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
