import React, { useState, useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { MonoText } from "../components/StyledText";

import { Question } from "../components/Question";
import { TouchableOpacity } from "react-native";
import getQuestionsForPlayer from "../utils/QuestionUtils";
import { QuizAnswer } from "../components/QuizAnswer";

const QUESTION_NUMBER = 5;
let questions = getQuestionsForPlayer(QUESTION_NUMBER);

export default function HomeScreen() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState(null);

  const reset = () => {
    setSelectedIndex(0);
    questions = getQuestionsForPlayer(QUESTION_NUMBER);
    setQuizAnswer(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require("../assets/images/robot-dev.png")
                : require("../assets/images/robot-prod.png")
            }
            style={styles.welcomeImage}
          />
        </View>

        {selectedIndex >= QUESTION_NUMBER ? (
          <QuizAnswer name={quizAnswer} />
        ) : (
          <Question
            question={questions[selectedIndex]}
            getNextQuestion={() => setSelectedIndex(selectedIndex + 1)}
            currentQuizAnswer={quizAnswer}
            setQuizAnswer={setQuizAnswer}
          />
        )}

        <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />
        </View>
        <TouchableOpacity
          onPress={() => {
            reset();
          }}
        >
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                backgroundColor: "red",
                width: 100,
                padding: 30,
                textAlign: "center",
                borderRadius: 10
              }}
            >
              Reset
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function DevelopmentModeNotice() {
  if (__DEV__) {
    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools.
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080B0D"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  }
});
