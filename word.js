function word(theAnswer) {
    this.theAnswer = theAnswer
    this.lettersArray = [];
    

    this.generateWord = function(){
        for (var i = 0; i < theAnswer.length; i++) {
            var letter = new letter(theAnswer[i]);
            this.lettersArray.push(letter);
        }
    }

    this.logWord = function () {
        var logAnswer = [];
        for (var i = 0; i < this.lettersArray.length; i++)
            logAnswer += this.lettersArray[i] + " ";
        }
        return logAnswer.join(' ');
     }

    this. userGuess = function (input) {
        for (var i = 0; i <this.lettersArray.length; i++) {
        this.lettersArray[i].check(input);
        }
    }

module.exports = word;
