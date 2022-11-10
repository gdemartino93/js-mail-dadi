

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
    scatola.className="uno";
}
if (numeroUtente === 2 ){
    scatola.className="due";
}
if (numeroUtente === 3 ){
    scatola.className="tre";
}
if (numeroUtente === 4 ){
    scatola.className="quattro";
}
if (numeroUtente === 5 ){
    scatola.className="cinque";
}
if (numeroUtente === 6 ){
    scatola.className="sei";
}

if (numeroComputer === 1 ){
    scatola1.className="uno";
}
if (numeroComputer === 2 ){
    scatola1.className="due";
}
if (numeroComputer === 3 ){
    scatola1.className="tre";
}
if (numeroComputer === 4 ){
    scatola1.className="quattro";
}
if (numeroComputer === 5 ){
    scatola1.className="cinque";
}
if (numeroComputer === 6 ){
    scatola1.className="sei";
}

