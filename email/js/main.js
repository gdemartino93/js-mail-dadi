const listaemail = ["luca@gmail.com", "gianni@gmail.com",];
// Dichiaro L'Array

const ingresso= prompt("Inserisci la tua email");
// Inserisco l'email dell'invitato

for (let i= 0; i < (listaemail.length); i++){
     if ( ingresso == listaemail[i]) {
        var numero= 0;
        console.log(`Ciao ${listaemail[i]} sei tra gli invitati`);
     }
}
        if (numero !== 0){
            console.log("non sei invitato")
} 
