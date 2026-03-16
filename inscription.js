var nom = document.getElementById('nom');
var prenom = document.getElementById('prenom');
var email = document.getElementById('email');
var password = document.getElementById('password');
var date = document.getElementById('date');
var ville = document.getElementById('ville');
var conditions = document.getElementById('conditions');
var errNom = document.getElementById('err-nom');
var errPrenom = document.getElementById('err-prenom');
var errEmail = document.getElementById('err-email');
var errPassword = document.getElementById('err-password');
var errDate = document.getElementById('err-date');
var errVille = document.getElementById('err-ville');
var errGenre = document.getElementById('err-genre');
var errConditions = document.getElementById('err-conditions');
var resultat = document.getElementById('resultat');
var tbody = document.getElementById('tbody');
var form = document.getElementById('Inscription');
function validerInput(input, err, message){
if(input.value.trim() === ""){
    err.textContent = message;
    err.style.color = "red";
    input.style.border = "2px solid red";
    return false;
}else{
    err.textContent = "";
    input.style.border = "";
    return true;
}
}
form.addEventListener("submit", function(e){
e.preventDefault();
var validNom = validerInput(nom, errNom, "Nom obligatoire");
var validPrenom = validerInput(prenom, errPrenom, "Prenom obligatoire");
var validEmail = validerInput(email, errEmail, "Email obligatoire");
var validPassword = validerInput(password, errPassword, "Mot de passe obligatoire");
var validDate = validerInput(date, errDate, "Date obligatoire");
var validVille = validerInput(ville, errVille, "Ville obligatoire");
var genre = "";
var genres = document.getElementsByName("genre");
for(var i=0;i<genres.length;i++){
    if(genres[i].checked){
        genre = genres[i].value;
    }
}
if(genre === ""){
    errGenre.textContent = "Choisissez un genre";
    errGenre.style.color = "red";
}
else{
    errGenre.textContent = "";
}
if(!conditions.checked){
    errConditions.textContent = "Accepter les conditions";
    errConditions.style.color = "red";
}
else{
    errConditions.textContent = "";
}
if(validNom && validPrenom && validEmail && validPassword && validDate && validVille && genre && conditions.checked){
    resultat.innerHTML =
    "Nom : " + nom.value + "<br>" +
    "Prenom : " + prenom.value + "<br>" +
    "Email : " + email.value + "<br>" +
    "Date : " + date.value + "<br>" +
    "Genre : " + genre + "<br>" +
    "Ville : " + ville.value;
    var tr = document.createElement("tr");
    tr.innerHTML =
    "<td>" + nom.value + "</td>" +
    "<td>" + prenom.value + "</td>" +
    "<td>" + email.value + "</td>" +
    "<td>" + date.value + "</td>";
    tbody.appendChild(tr);
    form.reset();     
}
});
var btnReset = document.querySelector("button[type='reset']");
btnReset.addEventListener("click", function(){
    resultat.innerHTML = "";
});
