// game.js

// define variables
// define variables
// var alpabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var answerArray = ["Arnold","Leo","Jeff","Clint", "Sam"];
var computerGuess = answerArray[Math.floor(Math.random() * answerArray.length)];
var star = computerGuess.toLowerCase();
var wins = 0;
var count = 9;
var guess = "";



// define elements by id
var ansText= document.getElementById("ans-text");
var winsText = document.getElementById("wins-text");
var countText = document.getElementById("count-text");
var guessesText = document.getElementById("guesses-text");

// display to html
winsText.textContent = "Wins: " + wins;
countText.textContent = "Guesses left: " + count;
guessesText.textContent = "Your guesses so far: " + guess;
ansText.textContent = "The answer is : " + computerGuess;

// get user input
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
   

    // checking for duplicate entries
    var found = guess.search(userGuess);
    if ((found === -1)) {
        // not a duplicate entry
        if ((count === 9)) {
            guess = userGuess;
        }
        else {
            // adding a comma
            guess = guess + ", " + userGuess;
        }

        // checking guess
        found = star.search(userGuess);
        if ((found === -1)) {
            count--;
            // incorrect guess
            if ((count === 0)) {
                count = 9;
                guess = "";
                computerGuess = answerArray[Math.floor(Math.random() * answerArray.length)];
                star = computerGuess.toLowerCase();
            }
        }
        else {
            // correct guess
            wins++;
            count = 9;
            guess = "";
            computerGuess = answerArray[Math.floor(Math.random() * answerArray.length)];
            star = computerGuess.toLowerCase();
        }
        // display to html
        winsText.textContent = "Wins: " + wins;
        countText.textContent = "Guesses left: " + count;
        guessesText.textContent = "Your guesses so far: " + guess;
        ansText.textContent = "The answer is : " + computerGuess;
    }
}

// var answerArray = ["Arnold","Leo","Jeff","Clint"];
// var storedGuess = [];

// result = function () {
//     wordHolder = document.getElementById('hold');
//     correct = document.createElement('ul');

//     for (var i = 0; i < word.length; i++) {
//       correct.setAttribute('id', 'my-word');
//       guess = document.createElement('li');
//       guess.setAttribute('class', 'guess');
//       if (word[i] === "-") {
//         guess.innerHTML = "-";
//         space = 1;
//       } else {
//         guess.innerHTML = "_";
//       }

//       storedGuess.push(guess);
//       wordHolder.appendChild(correct);
//       correct.appendChild(guess);
//     }
//   }
