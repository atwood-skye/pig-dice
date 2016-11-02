
function randomize(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

var randomNumber = "";






$(document).ready(function() {
  $("#roll-button").click(function(event) {
    event.preventDefault();
    randomNumber = randomize(1, 6);

    if (randomNumber === 1)
  })
})
