var canvas;
var gameState = 0;
var contestantCount, database, quiz, question, contestant;

function setup(){
  canvas = createCanvas(850,400);

  database = firebase.database();
  
  quiz.getState();
  quiz.start();

  quiz = new Quiz();

  contestantCount = database.ref('contestantCount');

  gameState = database.ref('gameState');

  
}


function draw(){
  background("pink");

  
}
