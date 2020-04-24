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