let nomeUsário = ""
let elemento = document.querySelector("#nome-usuário");


while(nomeUsário == ""){
    nomeUsário = prompt("Qual o seu nome?");
}
if(nomeUsário == null){
    elemento.textContent = "Seja muito bem-vindo!";
}else{
    elemento.textContent = nomeUsário;
}
