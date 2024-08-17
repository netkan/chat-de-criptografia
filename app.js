let resultado = "";
let texto = "";

function exibirTextonaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
} 
function limpar2(){
    document.getElementById("imagem-texto").style.display = "block";
    document.getElementById("espaco-resultado").style.display = "none";
}
function trocaDeVisibilidade(){
    document.getElementById("imagem-texto").style.display = "none";
    document.getElementById("espaco-resultado").style.display = "block";
}
function codificar(){
    texto = document.querySelector('.texto-inicial').value
    resultado = texto
    .replace(/a/g,"ai") 
    .replace(/e/g,"enter")
    .replace(/i/g,"imes")
    .replace(/o/g,"ober")
    .replace(/u/g,"ufat");
    trocaDeVisibilidade()
    exibirTextonaTela('#campo-resultado', resultado);
}
function decodificar(){
    texto = document.querySelector('.texto-inicial').value
    resultado = texto
    .replace(/ufat/g,"u")
    .replace(/ober/g,"o")
    .replace(/imes/g,"i")
    .replace(/enter/g,"e")
    .replace(/ai/g,"a")
    trocaDeVisibilidade()
    exibirTextonaTela('#campo-resultado', resultado);
}
