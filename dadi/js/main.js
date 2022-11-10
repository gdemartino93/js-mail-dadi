
// Genera e mostra i due numeri random
var mybtn= document.getElementById("tasto");
var tastoreset= document.getElementById("tastoreset");

mybtn.addEventListener("click",
function(){
    const scatola= document.getElementById("box");
    const scatola1=document.getElementById("boxpc");
    let result= document.getElementById("output");
    let numeroUtente= Math.floor((Math.random)() * 6 )+ 1;
    let numeroComputer= Math.floor((Math.random)() * 6 )+ 1;

if (numeroUtente == numeroComputer){
    console.log(`Pareggio`);
    result.innerHTML=`<span> pareggio </span>`
}
else if ( numeroUtente > numeroComputer){
    console.log("vince utente")
    result.innerHTML=`<span>vince l'utente </span>`
}   
else
    console.log("vince il computer")
    result.innerHTML=`<span>vince il computer </span>`

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
})
tastoreset.addEventListener("click",
function(){

    const scatola= document.getElementById("box");
    const scatola1=document.getElementById("boxpc");
    let result= document.getElementById("output");
    let numeroUtente= Math.floor((Math.random)() * 6 )+ 1;
    let numeroComputer= Math.floor((Math.random)() * 6 )+ 1;
    
    if (numeroUtente === 1 ){
        scatola.classList.remove("uno");
        scatola.classList.add("d-none");
    }
    if (numeroUtente === 2 ){
        scatola.classList.remove("due");
        scatola.classList.add("d-none");
    }
    if (numeroUtente === 3 ){
        scatola.classList.remove("tre");
        scatola.classList.add("d-none");
    }
    if (numeroUtente === 4 ){
        scatola.classList.remove("quattro");
        scatola.classList.add("d-none");
    }
    if (numeroUtente === 5 ){
        scatola.classList.remove("cinque");
        scatola.classList.add("d-none");
    }
    if (numeroUtente === 6 ){
        scatola.classList.remove("sei");
        scatola.classList.add("d-none");
    }
    
    if (numeroComputer === 1 ){
        scatola1.classList.remove("uno");
        scatola.classList.add("d-none");
    }
    if (numeroComputer === 2 ){
        scatola1.classList.remove("due");
        scatola.classList.add("d-none");
    }
    if (numeroComputer === 3 ){
        scatola1.classList.remove("tre");
        scatola.classList.add("d-none");
    }
    if (numeroComputer === 4 ){
        scatola1.classList.remove("quattro");
        scatola.classList.add("d-none");
    }
    if (numeroComputer === 5 ){
        scatola1.classList.remove("cinque");
        scatola.classList.add("d-none");
    }
    if (numeroComputer === 6 ){
        scatola1.classList.remove("sei");
        scatola.classList.add("d-none");
    }
})