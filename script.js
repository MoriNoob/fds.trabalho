let botao = document.querySelector("#botao")
let mensagem = document.querySelector("#mensagem")

botao.addEventListener("click", mostrarMensagem);

function mostrarMensagem (){
    mensagem.style.display = "block";
}

