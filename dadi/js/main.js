let numeroUtente= Math.floor((Math.random)() * 6 )+ 1;
let numeroComputer= Math.floor((Math.random)() * 6 )+ 1;
console.log("numero utente", numeroUtente)
console.log("numeropc", numeroComputer)
// Genera e mostra i due numeri random

if (numeroUtente > numeroComputer){
    console.log(`Utente ha vinto`);
}
    else{ 
        console.log(`pc ha vinto`)
    }
