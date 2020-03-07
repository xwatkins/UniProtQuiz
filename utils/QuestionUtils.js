import questions from "../assets/data/questions.json";
import specialQuestion from "../assets/data/specialQuestion.json";

const shuffleArray = arr1 => {
  return arr1.sort(() => Math.random() - 0.5);
};

const getQuestionsForPlayer = numberOfQuestions => [
  ...shuffleArray(questions).slice(0, numberOfQuestions - 1),
  specialQuestion
];

export default getQuestionsForPlayer;
