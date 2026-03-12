var nom =document.getElementById("nom");
var errnom=document.getElementById("errnom");
var prenom =document.getElementById("prenom");
var errprenom=document.getElementById("errprenom");
var naissance =document.getElementById("naissance");
var errnaissance=document.getElementById("errnaissance");
var photo =document.getElementById("photo");
var errphoto=document.getElementById("errphoto");
var ville =document.getElementById("ville");
var errville=document.getElementById("errville");
var btnValider =document.getElementById("btnValider");
nom.addEventListener('keyup',()=>validerInput(nom,errnom,"Nom obligatoire"));
prenom.addEventListener('keyup',()=>validerInput(prenom,errprenom,"Prenom obligatoire"));
function validerInput(input,err,message){
    if(input.value.trim()===""){
        err.textContent = message;
        err.style.colore="red";
    }
    else{
        err.textContent = "";
    }
}