// game.js

// define variables

// var alpabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var answerArray = ["Schwarzenegger", "Dicaprio", "Bridges", "Eastwood", "Jackson"];
var computerGuess = answerArray[Math.floor(Math.random() * answerArray.length)];
var star = computerGuess.toLowerCase();
var wins = 0;
var count = 9;
var guess = "";
var hidden = setHidden();



// define elements by id
//var ansText = document.getElementById("ans-text");
var winsText = document.getElementById("wins-text");
var countText = document.getElementById("count-text");
var guessesText = document.getElementById("guesses-text");
var hiddenText = document.getElementById("hidden-text");

// display to html
winsText.textContent = "Wins: " + wins;
countText.textContent = "Incorrect guesses left: " + count;
guessesText.textContent = "Your guesses so far: " + guess;
//ansText.textContent = "The answer is : " + computerGuess;
hiddenText.textContent = hidden;

// get user input
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();


    // checking for duplicate entries
    var found = guess.search(userGuess);
    if ((found === -1)) {
        // not a duplicate entry

        guess = guess + " " + userGuess;

        // checking guess
        var found1 = star.search(userGuess);
        if ((found1 === -1)) {
            count--;
            // incorrect guess
            if ((count === 0)) {
                count = 9;
                guess = "";
                computerGuess = answerArray[Math.floor(Math.random() * answerArray.length)];
                star = computerGuess.toLowerCase();
                hidden = setHidden();
                alert("You Lost :(");
            }
        }
        else {
            // correct guess
            hidden = replaceHidden(found1, userGuess);
            var counter = star.split(userGuess).length - 1;
            
            // check for double letters ******
            if (counter>1){
                var last=found1 + 1;
                for (var x=0;x<counter - 1;x++){
                    
                    var found3 = star.indexOf(userGuess, last);
                    //alert("counter= " + counter +" f3= " + found3 +" f1= " + found1);
                    hidden = replaceHidden(found3, userGuess);
                    last = found3 + 1;
                }
            }
           

            
         
            var winCheck = winner();
            if (winCheck === 1) {
                wins++;
                count = 9;
                guess = "";
                computerGuess = answerArray[Math.floor(Math.random() * answerArray.length)];
                star = computerGuess.toLowerCase();
                hidden = setHidden();

                alert("Congrats you won!");
            }

        }
        // display to html
        winsText.textContent = "Wins: " + wins;
        countText.textContent = "Incorrect guesses left: " + count;
        guessesText.textContent = "Your guesses so far: " + guess;
        //ansText.textContent = "The answer is : " + computerGuess;
        hiddenText.textContent = hidden;


    }
}

// set display to have the correct number of underscores
function setHidden() {
    var key = "";
    for (var i = 0; i < star.length; i++) {
        key = key + "_ ";
    }

    return key;
}

// replaces underscore with corret guess
function replaceHidden(found1, userGuess) {
    var key = "";
    var index=0;
    if (found1>0){
        index = found1 + found1;
    }

    for (var i = 0; i < hidden.length; i++) {

        var tempstr = hidden.substr(i, 1);
        if (i == index) {
            tempstr = userGuess;
        }

        //alert(userGuess + " f1=" +found1 +" "+ hidden.length + " " + i + " temp=" + tempstr);
        key = key + tempstr;
    }
    return key;
}

// checks for winner
function winner() {
    var found = hidden.search("_");
    if (found === -1) {

        return 1;
    }
    return 0;
}
