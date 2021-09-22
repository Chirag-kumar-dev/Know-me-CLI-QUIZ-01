const chalk = require('chalk');
const log = console.log;

var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Chirag",
    score: 1,
  },

  {
    name: "Ankit",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "1. Which is my dream place to visit for higher Studies? ",
  options:"A. Switzerland\nB.America\nC.Iatly\nD.Germany",
  answer: "Germany"
}, {
  question: "2.What is my second name? ",
  options:"A. Golu\nB. Sushant\nC. Ishan\nD. Tanay",
  answer: "Golu"
},
{
  question: "3.What's my favorite animated movie of all time? ",
  options:"A. Toy Story\nB. Stuart Little\nC. Finding Nemo\nD.Frozen",
  answer: "Stuart Little"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName ,'\n', "let's see if you know about");
  log(chalk.yellow.underline.bold("Chirag Kumar"));
}


// play function
function play(question,options,answer) {
    var userAnswer = readlineSync.question(chalk.yellowBright(question)+'\n'+chalk.cyanBright(options)+'\n'+"write answer-");
  

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log(chalk.green("right!"));
    score = score + 1;
    
  } else {
    log(chalk.red("wrong!"));
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.options,currentQuestion.answer)
  }
}

function showScores() {
  console.log(chalk.red("YAY! You SCORED: ", score));

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
