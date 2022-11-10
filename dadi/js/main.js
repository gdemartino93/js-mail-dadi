let numeroUtente= Math.floor((Math.random)() * 6 )+ 1;
let numeroComputer= Math.floor((Math.random)() * 6 )+ 1;
const scatola= document.getElementById("box");
const scatola1=document.getElementById("boxpc");
let result= document.getElementById("output");
console.log("numero utente", numeroUtente)
console.log("numeropc", numeroComputer)
// Genera e mostra i due numeri random
let mybtn = document.getElementById=("")

if (numeroUtente == numeroComputer){
    console.log(`Pareggio`);
    result.innerHTML="pareggio"
}
else if ( numeroUtente > numeroComputer){
    console.log("vince utente")
    result.innerHTML="vince utente"
}   
else
    console.log("vince il computer")
    result.innerHTML="vince computer"
    



if (numeroUtente === 1 ){
    scatola.classList.add("uno");
}
if (numeroUtente === 2 ){
    scatola.classList.add("due");
}
if (numeroUtente === 3 ){
    scatola.classList.add("tre");
}
if (numeroUtente === 4 ){
    scatola.classList.add("quattro");
}
if (numeroUtente === 5 ){
    scatola.classList.add("cinque");
}
if (numeroUtente === 6 ){
    scatola.classList.add("sei");
}

if (numeroComputer === 1 ){
    scatola1.classList.add("uno");
}
if (numeroComputer === 2 ){
    scatola1.classList.add("due");
}
if (numeroComputer === 3 ){
    scatola1.classList.add("tre");
}
if (numeroComputer === 4 ){
    scatola1.classList.add("quattro");
}
if (numeroComputer === 5 ){
    scatola1.classList.add("cinque");
}
if (numeroComputer === 6 ){
    scatola1.classList.add("sei");
}
