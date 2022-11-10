const listaemail = ["luca", "marco", "gianni", "sara"];
// Dichiaro L'Array

const ingresso= prompt("Inserisci la tua email");
// Inserisco l'email dell'invitato

for (let i= 0; i < (listaemail.length); i++){
     if ( ingresso == listaemail[i]) {
         console.log(`Ciao ${listaemail[i]} sei tra gli invitati`);
     }
     else{
        console.log(`Ciao ${ingresso} non sei tra gli invitati`);
     }
 }
// problema da vedere quando l'email combacia escono entrambi i consol log probabilmente perchè continua a combaciare con gli altri elementi dell'array.