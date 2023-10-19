import React from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Counter = ({ resetEnabled, onCountChanged, count }) => {
  const decrement = () => {
    notifyCountChanged(count - 1);
  };

  const increment = () => {
    notifyCountChanged(count + 1);
  };

  const reset = () => {
    if (resetEnabled) notifyCountChanged((count = 0));
  };
  const notifyCountChanged = (cnt) => {
    if (onCountChanged !== undefined) {
      onCountChanged(cnt);
    }
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
