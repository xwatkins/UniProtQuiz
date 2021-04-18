import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";

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
        numColumns="2"
        data={question.answers}
        renderItem={({ item }) => (
          <View style={styles.answerButtonContainer}>
            <TouchableOpacity
              onPress={() => handleButtonPress(item.trigger)}
              style={styles.answerButton}
            >
              <Text style={styles.answerButtonText}>{item.answer}</Text>
            </TouchableOpacity>
          </View>
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
    color: "#F2BD1D",
    fontWeight: "bold",
    fontSize: 30
  },
  answerButtonContainer: {
    margin: 5,
    flex: 1
  },
  answerButton: {
    padding: 30,
    backgroundColor: "#F2BD1D"
  },
  answerButtonText: {
    color: "#080B0D",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15
  }
});
