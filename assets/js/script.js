/*Chiedi all’utente il suo nome,

poi chiedi il suo cognome,

poi chiedi il suo colore preferito

Infine scrivi sulla pagina 

nomecognomecolorepreferito22*/



const nomeUtente = prompt('Inserisci il tuo nome');
const cognomeUtente = prompt('Inserisci il tuo Cognome');
const colore = prompt('Inserisci il tuo colore preferito');
let myOutput;

// ! OUTPUT

myOutput = `
<span class="bold red">${nomeUtente}</span><span class="bold blue">${cognomeUtente}</span><span class="bold green">${colore}</span><span class="bold">22</span>
`;

document.getElementById('password').innerHTML += myOutput;

// ! CONSOLE

console.log('nomeUtente ----->',nomeUtente);
console.log('cognomeUtente ----->',cognomeUtente);
console.log('colore ----->',colore);
console.log('myOutput ----->',myOutput);