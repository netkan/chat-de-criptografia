let resultado = ""
let texto = ""

function exibirTextonaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
} 

function limpar2(){
    exibirTextonaTela('.espaco-resultado', "");
}

function codificar(){
    exibirTextonaTela('.imagem', "")
    texto = document.querySelector('textarea').value
    resultado = texto

    .replace(/a/g,"ai") 
    .replace(/e/g,"enter")
    .replace(/i/g,"imes")
    .replace(/o/g,"ober")
    .replace(/u/g,"ufat");
    exibirTextonaTela('.espaco-resultado', resultado);
}

function decodificar(){
    exibirTextonaTela('.imagem', "")
    texto = document.querySelector('textarea').value
    resultado = texto
    .replace(/ufat/g,"u")
    .replace(/ober/g,"o")
    .replace(/imes/g,"i")
    .replace(/enter/g,"e")
    .replace(/ai/g,"a")
    exibirTextonaTela('.espaco-resultado', resultado);
}

