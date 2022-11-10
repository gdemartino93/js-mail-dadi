const listaemail = ["luca@gmail.com", "gianni@gmail.com",];
// Dichiaro L'Array

const btnConfirm= document.getElementById("confirm");
// dichiaro il btn conferma
const btnReset=document.getElementById("reset");

btnConfirm.addEventListener("click",
function(){
   const ingresso = document.getElementById("email").value;
   console.log(ingresso.length)
   // prendo l'email al click su conferma
   if ( ingresso.length == 0){
      alert("L'email è obbligatoria")
      document.getElementById("msgOutput").innerHTML=`<div class="text-success">inserisci l'email</div>`
   }
for (let i= 0; i < (listaemail.length); i++){
   
     if ( ingresso == listaemail[i]) {
        var numero= 0;
        document.getElementById("msgOutput").innerHTML=`<div class="text-success">Ciao ${listaemail[i]}, ti confermo che sei tra gli invitati</div>`
     }
}
        if (numero !== 0){
         document.getElementById("msgOutput").innerHTML=`<div class="text-danger fw-bold fs-3">Mi dispiace la tua email non è corretta o non risulta tra quella degli invitati"</div>`      
} 
})
btnReset.addEventListener("click",
function(){
   document.getElementById("msgOutput").innerHTML="";
   document.getElementById("email").value="";

}
)