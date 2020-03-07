import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

import answers from "../assets/data/answers.json";

export function QuizAnswer({ name }) {
  const { description } = answers.find(answer => answer.name === name);
  return (
    <View>
      <Text>{name}</Text>
      <Text>{description}</Text>
    </View>
  );
}
