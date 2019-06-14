var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var wins = 0;
var losses = 0;
var guesses = 10;

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoice);

// What happens when user presses a key...

document.onkeypress = function (){
    var playerGuess = event.key;

    if(playerGuess === computerChoice){
        wins++;
        guesses = 10;
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    }else{
        guesses--;
    }
    if(guesses === 0){
        losses++;
        guesses = 10;
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    console.log('player guess:' + playerGuess)
    console.log('w: ' + wins)
console.log(losses)
console.log(guesses)
console.log(computerChoice)

}

// =======================
