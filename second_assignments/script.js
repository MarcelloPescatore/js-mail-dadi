// link test for html 
console.log('test');

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// create 2 variables that generate a random number
let playerNumber = Math.floor(Math.random()*6) + 1;
let computerNumber = Math.floor(Math.random()*6) + 1;

console.log(playerNumber);
console.log(computerNumber);


// create a condition that compare the random numbere generated and stamp the higher number 

if (playerNumber > computerNumber){
    console.log(`Il giocatore è il vincitore ha ottenuto un punteggio di ${playerNumber}`);
} else if (playerNumber < computerNumber){
    console.log(`Il computer è il vincitore ha ottenuto un punteggio di ${playerNumber}`);
} else {
    console.log('Il punteggio ottenuto è pari');
}