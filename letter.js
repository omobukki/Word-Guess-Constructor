// call a function letter constructor

function letter(char) {
    this.letter = char;
    this.guessedWord = false;

    this.displayChars = function () {
        if (this.guessedWord){
            return this.letter;
        } else {
            return "_";
        };
    };

    this.check = function (userInput) {
        if (userInput === this.letter) {
            this.guessedWord = true;
        }
    };
}
    module.exports =letter;