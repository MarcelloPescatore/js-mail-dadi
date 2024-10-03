// link test for html 
console.log('test');

// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// creo una lista di email valide ad accedere
const listValidEmail = ['marco@gmail.com' , 'luca@gmail.com' , 'elisa@gmail.com' , 'example@gmail.com'];
// creo un prompt per richiedere l'email all'utente
let userInput = prompt('Inserisci qui la tua email');
// creo una condizione che controlla la validità dell'email
if (listValidEmail.includes(userInput)){
    console.log(`${userInput} è un'email valida`);
} else {
    console.log(`${userInput} non è un'email valida`);
}



