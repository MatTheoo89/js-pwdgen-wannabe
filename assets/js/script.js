/*Chiedi all’utente il suo nome,

poi chiedi il suo cognome,

poi chiedi il suo colore preferito

Infine scrivi sulla pagina 

nomecognomecolorepreferito22*/

// * Le nostre variabili

let nomeUtente;
let cognomeUtente;
let colore;
let myOutput;

// * inizializzazione variabili

nomeUtente = prompt('Inserisci il tuo nome')
cognomeUtente = prompt('Inserisci il tuo Cognome')
colore = prompt('Inserisci il tuo colore preferito')

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