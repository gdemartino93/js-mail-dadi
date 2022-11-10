const listaemail = ["luca@gmail.com", "gianni@gmail.com",];
// Dichiaro L'Array

const btnConfirm= document.getElementById("confirm");
// dichiaro il btn conferma
const btnReset=document.getElementById("reset");

btnConfirm.addEventListener("click",
function(){
   const ingresso = document.getElementById("email").value;
   // prendo l'email al click su conferma


for (let i= 0; i < (listaemail.length); i++){
     if ( ingresso == listaemail[i]) {
        var numero= 0;
        document.getElementById("msgOutput").innerHTML=`<div class="text-success">Ciao ${listaemail[i]}, ti confermo che sei tra gli invitati</div>`
     }
}
        if (numero !== 0){
         document.getElementById("msgOutput").innerHTML=`<div class="text-danger fw-bold fs-3">Mi dispiace l'email da te inserita:"${ingresso} non risulta tra gli invitati."</div>`
            
} 
})