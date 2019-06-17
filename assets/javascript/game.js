// game.js

// define variables
var actorArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = alpabetArray[Math.floor(Math.random() * alpabetArray.length)];
var wins = 0;
var losses = 0;
var count = 9;
var guess = "";
var answerArray=[];
for (var =i; i<alpabetArray.length; i++){
    answerArray[i]="_"
}



// define elements by id
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var countText = document.getElementById("count-text");
var guessesText = document.getElementById("guesses-text");

// display to html
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
countText.textContent = "Guesses left: " + count;
guessesText.textContent = "Your guesses so far: " + guess;

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
        if ((userGuess !== computerGuess)) {
            count--;
            // incorrect guess
            if ((count === 0)) {
                losses++;
                count = 9;
                guess = "";
                computerGuess = alpabetArray[Math.floor(Math.random() * alpabetArray.length)];
            }
        }
        else {
            // correct guess
            wins++;
            count = 9;
            guess = "";
            computerGuess = alpabetArray[Math.floor(Math.random() * alpabetArray.length)];
        }
        // display to html
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        countText.textContent = "Guesses left: " + count;
        guessesText.textContent = "Your guesses so far: " + guess;
    }
}
    