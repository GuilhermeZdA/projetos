
var fundo = document.getElementById("main")
var imagem = document.getElementById("imagem")
var cadastrar = document.getElementById("cadastrar")
var entrar = document.getElementById("entrar")


function hos () {
    fundo.style.backgroundImage = "url('imagens/fundovermelho.png')"
    imagem.style.backgroundImage = "url('imagens/hospital-desenho.png')"
    cadastrar.style.display = "block"
    entrar.href = "hospital.html"
}

function fun () {
    fundo.style.backgroundImage = "url('imagens/fundoazul.png')"
    imagem.style.backgroundImage = "url('imagens/funcionario.png')"
    cadastrar.style.display = "none"
    entrar.href = "funcionario.html"
}