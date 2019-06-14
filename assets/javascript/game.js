var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var wins = 0;
var losses = 0;
var guesses = 10;
var winsHTML = document.getElementById ('wins')
var lossesHTML = document.getElementById ('losses')
var guessesHTML = document.getElementById ('guesses-so-far')
var remainingGuessesHtml = document.getElementById ('guesses-left')
var letterPressed = []

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoice);
console.log(winsHTML);

// What happens when user presses a key...
function guessReset (){
    letterPressed = [];
    guessesHTML.innerHTML = letterPressed;
}
document.onkeypress = function (){
    var playerGuess = event.key;
    letterPressed.push(playerGuess);
    guessesHTML.innerHTML = letterPressed;
    console.log(letterPressed);
    if(playerGuess === computerChoice){
        wins++;
        guesses = 10;
        guessReset();
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        winsHTML.innerHTML = wins;
    }else{
        guesses--;
        remainingGuessesHtml.innerHTML = guesses;
    }
    if(guesses === 0){
        losses++;
        guesses = 10;
        guessReset();
        remainingGuessesHtml.innerHTML = guesses;
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        lossesHTML.innerHTML = losses;
    }
    console.log('player guess:' + playerGuess)
    console.log('w: ' + wins)
console.log(losses)
console.log(guesses)
console.log(computerChoice)

}

// =======================
