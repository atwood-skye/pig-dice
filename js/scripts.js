
function randomize(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

var currentTurn = "player1";

function changeTurn() {
  if (currentTurn === "player1") {
    currentTurn = "player2";
  }
  else if (currentTurn === "player2") {
    currentTurn = "player1";
  }
}

var turnScore = 0;

var player1Score = 0;
var player2Score = 0;

var randomNumber = "";






$(document).ready(function() {
  $("#roll-button").click(function(event) {
    event.preventDefault();
    $("span#player-roll").empty();

    randomNumber = randomize(1, 6);
    $("span#player-roll").append(randomNumber);

    if (randomNumber === 1) {
      turnScore = 0;
      changeTurn();
      alert("You rolled a 1! Next Player's turn!");
    }
    else if (randomNumber > 1) {
      turnScore += randomNumber;
      $("span#turn-score").empty();
      $("span#turn-score").append(turnScore);


    }
  });
  $("#pass-button").click(function(event) {
    event.preventDefault();

    if (currentTurn === "player1") {
      player1Score += turnScore;
      $("h4#player1-score").empty();
      $("h4#player1-score").append(player1Score);
      alert("Next Player's turn!");
      changeTurn();
      turnScore = 0;
    }
    else if (currentTurn === "player2") {
      player2Score += turnScore;
      $("h4#player2-score").empty();
      $("h4#player2-score").append(player2Score);
      alert("Next Player's turn!");
      changeTurn();
      turnScore = 0;
    }
  });

});
