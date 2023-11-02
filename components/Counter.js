import React from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useCountContext } from "../contexts/CountContext";

const Counter = ({ resetEnabled }) => {
  const { count, setCount } = useCountContext();

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    if (resetEnabled) setCount(0);
  };

  return (
    <View style={styles.containerView}>
      <TouchableOpacity onPress={decrement} onLongPress={reset}>
        <View
          style={
            resetEnabled ? [styles.button, styles.resetable] : styles.button
          }
        >
          <Text>-</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.textView}>{count}</Text>
      <TouchableOpacity onPress={increment}>
        <View style={styles.button}>
          <Text>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 150,
  },
  textView: {
    padding: 10,
    flex: 1,
    height: "100%",
    textAlign: "center",
    backgroundColor: "lightgrey",
  },
  button: {
    flex: 1,
    minWidth: 50,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  resetable: {
    backgroundColor: "red",
  },
});

export default Counter;
