import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

import answers from "../assets/data/answers.json";

export function QuizAnswer({ name }) {
  const { description } = answers.find(answer => answer.name === name);
  return (
    <View>
      <Text style={styles.quizAnswerItem}>{name}</Text>
      <Text style={styles.quizAnswerItem}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  quizAnswerItem: {
    textAlign: "center",
    color: "#F2BD1D",
    fontWeight: "bold",
    fontSize: 30
  }
});
