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
  ${nomeUtente}${cognomeUtente}${colore}22
`;

document.getElementById('password').innerHTML += myOutput;

// ! CONSOLE

console.log(nomeUtente);
console.log(cognomeUtente);
console.log(colore);
console.log(myOutput);