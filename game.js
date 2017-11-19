// Create an array with the potential answers
var word = ["javascript", "monkey", "amazing", "ontology", "pancake", "dog", "contigo", "formula", "movers", "puppy" ];
// Randomly choose an item in the array and assign it to a variable
var guessWord = word[Math.floor(Math.random() * word.length)];
// Create a new string with the number of underscores in the variable called emptyGuess

var answerArray = [];
for (var i = 0; i < guessWord.length; ++i) {
    answerArray[i] = "_";
}
// Create a variable called wins set to 0
var wins = 0;
// Create a variable called chances set to 10
var chances = 10;
// Create a variable counting how many letters are left unguessed
var letterLeft = guessWord.length;
var guess = [];
// Game itself
document.onkeyup = function(event) {
	var letterGuess = event.key;
	guess.push(letterGuess);
	document.getElementById("letter-guess").innerHTML = " your current Guess: " + letterGuess;
	document.getElementById("chances").innerHTML = "chances you have left: " + chances;
	if(guessWord.includes(letterGuess) === false) {
		chances = chances - 1;
	}else if (guessWord.includes(letterGuess) === true) {
		for(j = 0; j < guessWord.length; j++){
			if (guessWord[j] === letterGuess) {
				answerArray[j] = letterGuess;
				letterLeft = letterLeft - 1;
				;
				if(letterLeft === 0) {
					document.getElementById("final").innerHTML = "You Win! try Again!";
					wins = wins + 1; 
					document.getElementById("final").innerHTML = "Wins: " + wins;

				}else if(chances <= 0) {
					document.getElementById("final").innerHTML = "You Lose: try Again!";

				}
			}
		}
	
	

	document.getElementById("answer-array").innerHTML = "Correct Letters you guessed: " + answerArray;
	
	document.getElementById("guess-array").innerHTML = "Here are all your guesses: " + guess;
	
};
};