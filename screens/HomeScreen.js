import { React, useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import Counter from "../components/Counter";

const HomeScreen = ({ navigation }) => {
  const [currentCount, setCurrentCount] = useState(0);
  const showDetails = () => {
    navigation.push("Details", { count: currentCount });
  };

  const countChanged = (cnt) => {
    console.log("the current count is ", cnt);
    setCurrentCount(cnt);
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
