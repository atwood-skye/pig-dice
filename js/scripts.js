// Business Logic //
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

function clearTurnScore() {
  $("span#player-roll").empty();
  $("span#turn-score").empty();
}

function newGame() {
  $("span#player-roll").empty();
  $("span#turn-score").empty();
  alert("Game Over!")
  player1Score = 0;
  player2Score = 0;
  $("h1#player1-score").empty();
  $("h1#player1-score").append(player1Score);
  $("h1#player2-score").empty();
  $("h1#player2-score").append(player2Score);
}
var turnScore = 0;
var player1Score = 0;
var player2Score = 0;
var randomNumber = "";

// User Interface Logic //
$(document).ready(function() {
  $("#roll-button").click(function(event) {
    event.preventDefault();
    $("span#player-roll").empty();

    randomNumber = randomize(1, 6);

    $("span#player-roll").append(randomNumber);

    if (randomNumber === 1) {
      turnScore = 0;
      clearTurnScore();
      changeTurn();
      alert("You rolled a 1! Next Player's turn!");
    }
    else if (randomNumber > 1) {
      turnScore += randomNumber;
      $("span#turn-score").empty();
      $("span#turn-score").append(turnScore);
      if (currentTurn === "player1" && turnScore + player1Score >= 100) {
        player1Score += turnScore
        alert("Player 1 Wins!");
        newGame();
      }
      else if (currentTurn === "player2" && turnScore + player2Score >= 100) {
        player2Score += turnScore
        alert("Player 2 Wins!");
        newGame();
        changeTurn();
      }
    }
  });
  $("#pass-button").click(function(event) {
    event.preventDefault();

    if (currentTurn === "player1") {
      player1Score += turnScore;
      $("h1#player1-score").addClass("red-score");
      $("h1#player1-score").fadeOut();
      $("h1#player1-score").empty();
      $("h1#player1-score").append(player1Score);
      $("h1#player1-score").fadeIn();
      $("h1#player1-score").fadeOut();
      $("h1#player1-score").fadeIn();
      $("h1#player1-score").fadeOut();
      $("h1#player1-score").fadeIn(function() {
        $("h1#player1-score").removeClass("red-score");
      });
      clearTurnScore();
      changeTurn();
      turnScore = 0;
    }
    else if (currentTurn === "player2") {
      player2Score += turnScore;
      $("h1#player2-score").addClass("red-score");
      $("h1#player2-score").fadeOut();
      $("h1#player2-score").empty();
      $("h1#player2-score").append(player2Score);
      $("h1#player2-score").fadeIn();
      $("h1#player2-score").fadeOut();
      $("h1#player2-score").fadeIn();
      $("h1#player2-score").fadeOut();
      $("h1#player2-score").fadeIn(function() {
        $("h1#player2-score").removeClass("red-score");
      });
      clearTurnScore();
      changeTurn();
      turnScore = 0;
    }
  });

});
