var readlineSync = require("readline-sync");

var userName = readlineSync.question("What's your name ? ");

console.log("Welcome" + userName +"to DO YOU KNOW Mahendra?");

var score = 0

var highScore = [{
  name : "Pratik",
  score : 3
},
{
  name : "Hemant",
  score : 2
}]

function check(question, answer) {
  var userAns = readlineSync.question(question);

  if (userAns.toUpperCase() == answer.toUpperCase()){
    console.log("Right!");
    score++
    console.log("Curent Score", score);
    console.log("--------------------");
  }else{
    console.log("Wrong!");
    console.log("Curent Score", score);
    console.log("--------------------");
  }
}

var questionBank = [{
  question : "Which is my favourate sport? ",
  answer : "cricket"
},
{
  question : "Where do i live? ",
  answer : "nashik"
},
{
  question : "Who is my favourite cricketr? ",
  answer : "rohit sharma"
}
]

for (i= 0; i<questionBank.length;i++){
  var question = questionBank[i].question;
  var answer = questionBank[i].answer;
  check(question, answer)
}

console.log("YAY! Your SCORED : "+score);
console.log("Check out the high scores, if you should be there ping me and I'll update it");
for (i= 0; i<highScore.length;i++){
  console.log(highScore[i].name,":", highScore[i].score)
}
