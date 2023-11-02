import React, { useEffect } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { useCountContext } from "../contexts/CountContext";

const DetailsScreen = ({ route, navigation }) => {
  const { count, setCount } = useCountContext();

  useEffect(() => {
    console.log("details rendered");
  }, []);

  return (
    <View style={styles.containerView}>
      <Text>Wow, this is a nice details Screen</Text>
      <Text>The count is {count}</Text>
      <Button
        title="Reset Count"
        onPress={() => {
          setCount(0);
        }}
      ></Button>
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
