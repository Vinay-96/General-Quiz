const chalk = require('chalk');
const readlineSync = require('readline-sync');

var username = readlineSync.question("What is your name? ");

console.log("Salaam " + chalk.yellowBright(username) + " Saab!...Welcome to this crazy quiz");

let score = 0;

var questionBank = [{
  question: `Who is Ranveer singh
              a: Actor
              b: Cricketer
              c: Chef\n`,
  answer: "a"
},
{
  question: `Who is Baba Ramdev
              a: Astrologer
              b: Yoga guru
              c: Dancer\n`,
  answer: "b"
},
{
  question: `Who killed Bhaubali
              a: Kalakeya
              b: katapa
              c: Balaladeva\n`,
  answer: "b"
},
{
  question: `What is Zerodha
              a: Stock Exchange
              b: Mutual Fund House
              c: Stock Broker\n`,
  answer: "c"
},
{
  question: `Who is our Father of nation
              a: Mahathma Gandhi
              b: Rahul Gandhi
              c: Narendra Modi\n`,
  answer: "a"
},
{
  question: `Who owns Jagaur LandRover(JLR)
              a: Maruthi Suzuki
              b: kia
              c: TATA\n`,
  answer: "c"
},
{
  question: `What does swiggy deliver
              a: Clothes
              b: Food
              c: Chicken/Mutton/fish\n`,
  answer: "b"
},
{
  question: `Who is KGF hero
              a: Salman Khan
              b: Wills Smith
              c: Yash\n`,
  answer: "c"
},
{
  question: `Who is the author of Rich dad poor dad
              a: Robert jackie
              b: Robert T. Kiyosaki
              c: Timothy Ferriss\n`,
  answer: "b"
},
{
  question: `National game of Russia
              a: Chess
              b: Cricket
              c: Kabadi\n`,
  answer: "a"
}];


function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log(chalk.green("Right!.."))
    score += 1;
  }
  else {
    console.log(chalk.red("Wrong!.."))
  }

  console.log(chalk.cyan("Current Score: ", score));
  console.log("***********************")
}

for (var i = 0; i < questionBank.length; i++) {
  var currentQuestion = questionBank[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.magenta("YAY..! you scored: ", score));

// ********************************************************************

console.log(chalk.cyanBright("Checkout the high scores\n"));

var highScores = [
  {
  name: "vinay",
  score1:10
  },
  {
  name: "vikram",
  score1:9
  }
] 

for(var j = 0 ; j < highScores.length ; j++)
{
      var currentHigh = highScores[j];
      console.log(chalk.greenBright(currentHigh.name));
      console.log(chalk.greenBright(currentHigh.score1));
}





