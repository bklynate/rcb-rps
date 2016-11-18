var wins = 0;
var ties = 0;
var losses = 0;

var computerChoices = ["r", "p", "s"];

document.onkeyup = function(event){
  var userGuess = event.key;
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

  if(userGuess === "r" || userGuess === "p" || userGuess === "s") {
    document.querySelector('#fights').innerHTML = "<p>"+userGuess + " vs " + computerGuess+"</p>";
    if(userGuess === 'r' && computerGuess === 'r'){
      ties++
      document.querySelector('#ties').innerHTML = ties;
      document.querySelector('#game').innerHTML="<p>Tie Game</p>";
    } else if(userGuess === 'r' && computerGuess === 's'){
      wins++
      document.querySelector('#wins').innerHTML = wins;
      document.querySelector('#game').innerHTML="<p>You Win!!</p>";
    } else if (userGuess === 'r' && computerGuess === 'p'){
      losses++
      document.querySelector('#losses').innerHTML = losses;
      document.querySelector('#game').innerHTML="<p>You Lose!!</p>";
    } else if(userGuess === 's' && computerGuess === 's'){
      ties++
      document.querySelector('#ties').innerHTML = ties;
      document.querySelector('#game').innerHTML="<p>Tie Game</p>";
    } else if(userGuess === 's' && computerGuess === 'p'){
      wins++
      document.querySelector('#wins').innerHTML = wins;
      document.querySelector('#game').innerHTML="<p>You Win!!</p>";
    } else if (userGuess === 's' && computerGuess === 'r'){
      losses++
      document.querySelector('#losses').innerHTML = losses;
      document.querySelector('#game').innerHTML="<p>You Lose!!</p>";
    } else if (userGuess === 'p' && computerGuess === 'r'){
      wins++
      document.querySelector('#wins').innerHTML = wins;
      document.querySelector('#game').innerHTML="<p>You Win!!</p>";
    } else if (userGuess === 'p' && computerGuess === 's'){
      losses++
      document.querySelector('#losses').innerHTML = losses;
      document.querySelector('#game').innerHTML="<p>You Lose!!</p>";
    } else if (userGuess === 'p' && computerGuess === 'p'){
      ties++
      document.querySelector('#ties').innerHTML = ties;
      document.querySelector('#game').innerHTML="<p>Tied Game!!</p>";
    }
  }
}
