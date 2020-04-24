var wordOptions = ["a nightmare on elm street", "the breakfast club", "top gun", "back to the future", "coming to america", "sixteen candles", "the princess bride", "the goonies", "stand by me", "trading places", "blade runner", "the karate kid" ];
var selectWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccess = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 0;


function startGame () {
    selectWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectWord.split("");
    numBlanks = lettersinWord.length;

    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccess = [];

    for (var i=0; i<numBlanks; i++){
        blanksAndSuccess.push("_");
    }

    document.getElementById("MovietoGuess").innerHTML = blanksAndSuccess.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    console.log(selectWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccess);
}


function checkLetters(letter) {

    var isLetterInWord = false;
    
    for (var i=0; i<numBlanks; i++){
        if(selectWord[i] == letter) {
            isLetterInWord = true
        
        }
    }

    if(isLetterInWord){
        for (var i=0; i<numBlanks; i++){
            if(selectWord[i] == letter) {
                blanksAndSuccess[i] = letter;
        }
    }
}
else {
    wrongLetters.push(letter);
    guessesLeft--
}

console.log(blanksAndSuccess);

}

function roundComplete(){
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left" + guessesLeft);

    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("MovietoGuess").innerHTML = blanksAndSuccess.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
