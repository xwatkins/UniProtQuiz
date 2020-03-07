import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

export function Question({
  question,
  getNextQuestion,
  currentQuizAnswer,
  setQuizAnswer
}) {
  const handleButtonPress = trigger => {
    if (
      trigger &&
      currentQuizAnswer !== "batman" &&
      currentQuizAnswer !== "sausage"
    ) {
      setQuizAnswer(trigger);
    }
    getNextQuestion();
  };

  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionTitle}>{question.question}</Text>
      <FlatList
        data={question.answers}
        renderItem={({ item }) => (
          <Button
            onPress={() => handleButtonPress(item.trigger)}
            title={item.answer}
          />
        )}
        keyExtractor={item => item.answer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    justifyContent: "center"
  },
  questionTitle: {
    textAlign: "center",
    color: "blue",
    fontWeight: "bold",
    fontSize: 30
  }
});
