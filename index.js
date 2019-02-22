var word = require("./word.js");
var inquire = require("inquirer");
var colors = require('colors');

var animals = ['lion', 'elephant', 'dolphin', 'tiger', 'eagle', 'snake', 'rhino', 'monkey', 'fish'];
var alphabet = "abcdefghijklmnopqrstuvwxyz";


var chooser = 0;
var wordPicked  = '';
var defaultWord = "";
var counter = 0;

var randomI = Math.floor(Math.random() * animals.length);
var randomWord = animals[randomI];

var gameWord = new Word(randomWord);

var NewWordrequired = false;
var incorrectalphabet = [];
var correctalphabet = [];

var lives = 10;


function gameStarter() {
  if (NewWordrequired) {
    var randomI = Math.floor(Math.random() * animals.length);
    var randomWord = animals[randomIndex];

    gameWord = new Word(randomWord);

    NewWordrequired = false;
  }


// TestS if a letter guessed is correct
  var fullWord = [];
  gameWord.lettersArray.forEach(fullCheck);

  // letters remaining to be guessed
  if (fullWord.includes(false)) {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Guess a letter from A-Z!",
          name: "userinput"
        }
      ])
      .then(function(input) {
        if (
          !alphabet.includes(input.userinput) ||
          input.userinput.length > 1
        ) {
          console.log("\nPlease one more time!\n");
          gameStarter();
        } else {
          if (
            incorrectalphabet.includes(input.userinput) ||
            correctalphabet.includes(input.userinput) ||
            input.userinput === ""
          ) {
            console.log("\nLetter already guessed or no input detected\n");
            gameStarter();
          } else {
            // Checks if guess is correct
            var wordCheckerArr = [];

            gameWord.userGuess(input.userinput);

            // Checks if guess is correct
            gameWord.lettersArray.forEach(wordChecker);
            if (wordCheckArr.join("") === fullWord.join("")) {
              console.log("\nIncorrect\n");

              incorrectalphabet.push(input.userinput);
              lives--;
            } else {
              console.log("\nCorrect!\n");

              correctalphabet.push(input.userinput);
            }

            gameWord.log();

            // Print guesses left
            console.log("Guesses Left: " + lives + "\n");

            // Print letters guessed already
            console.log(
              "Letters Guessed: " + incorrectalphabet.join(" ") + "\n"
            );

            // Guesses left
            if (lives> 0) {
              // Call function
              gameStarter();
            } else {
              console.log("Sorry, you lose!\n");

              gameRestarter();
            }

            function wordChecker(key) {
              wordCheckArr.push(key.guessed);
            }
          }
        }
      });
  } else {
    console.log("YOU WIN!\n");

    gameRestarter();
  }

  function fullCheck(key) {
    fullWord.push(key.guessed);
  }
}

function gameRestarter() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to:",
        choices: ["Play Again", "Exit"],
        name: "restart"
      }
    ])
    .then(function(input) {
      if (input.restart === "Play Again") {
        NewWordrequired = true;
        incorrectalphabet = [];
        correctalphabet = [];
        lives = 10;
        gameStarter();
      } else {
        return;
      }
    });
}

gameStarter();



