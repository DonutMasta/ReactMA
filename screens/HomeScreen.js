import React from "react";
import { View, Button, StyleSheet } from "react-native";
import Counter from "../components/Counter";

const HomeScreen = ({ navigation }) => {
  let currentCount = 0;
  const showDetails = () => {
    navigation.push("Details", { count: currentCount });
    console.log("show details");
  };

  const countChanged = (cnt) => {
    console.log("the current count is ", cnt);
    currentCount = cnt;
  };

  return (
    <View style={styles.containerView}>
      <Counter onCountChanged={countChanged} />
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
