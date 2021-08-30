var readlineSync = require('readline-sync');

var userName = readlineSync.question("What's your name? ");

console.log("Hello " + userName + ". Welcome to HOW WELL DO YOU KNOW AB de Villiers? game.");

console.log("");

var score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer == answer) {
    console.log("You are Correct ｡^‿^｡ ");
    score = score + 1;
  } else {
    console.log("You are Wrong ( ͡° ʖ̯ ͡°) ")
  }
  console.log("Your score is: " + score);
  console.log("----------------")
}

var questions = [
  {
    question: "AB de Villiers holds the  record  for fastest century in ODI. How many balls he took to score that century? ",
    answer: 31
  },
  {
    question: "AB Devilliers also holds the record for fastest fifty in ODI. How many balls he took to score that fifty? ",
    answer: 16
  },
  {
    question: "What’s the highest score of AB de Villiers in ODI’s? ",
    answer: 176
  },
  {
    question: "Is AB de Villiers  the only non-opening overseas batsman to score 3 centuries in IPL? ",
    answer: "yes"
  },
  {
    question: "What’s the full name of AB de Villiers? ",
    answer: "abraham benjamin de villiers"
  },
  {
    question: "How many times Malinga took ABD's wicket across all formats? ",
    answer: 1
  }
]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Your Final Score is: " + score);

var highScores = [
  {
    name: "Santosh",
    score: 6
  },
  {
    name: "Deepak",
    score: 6
  }
]

console.log("High Scores List");

for (var j = 0; j < highScores.length; j++) {
  var currentHighScore = highScores[j];
  console.log(currentHighScore.name + ": " + currentHighScore.score);
}

console.log("Please send me a screenshot, if you made the high score.")