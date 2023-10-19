import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const DetailsScreen = ({ route, navigation }) => {
  return (
    <View style={styles.containerView}>
      <Text>Wow, this is a nice details Screen</Text>
      <Text>The count is {route.params.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 60,
  },
});

export default DetailsScreen;
