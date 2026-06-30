
var fundo = document.getElementById("main")
var imagem = document.getElementById("imagem")
var cadastrar = document.getElementById("cadastrar")
var entrar = document.getElementById("entrar")
var buttonFun = document.getElementById("funcionario")
var buttonHos = document.getElementById("hospital")


function hos () {
    fundo.style.backgroundImage = "url('imagens/fundovermelho.png')"
    imagem.style.backgroundImage = "url('imagens/hospital-desenho.png')"
    cadastrar.style.display = "block"

    entrar.href = "hospital.html"
    entrar.style.backgroundColor = "var(--corEscura2)"
    entrar.style.borderColor = "var(--corEscura2)"

    buttonHos.style.backgroundColor = "var(--branco)"
    buttonHos.style.color = "var(--corEscura2)"
    buttonFun.style.backgroundColor = "var(--botaoAzul)"
    buttonFun.style.color = "var(--branco)"
}

function fun () {
    fundo.style.backgroundImage = "url('imagens/fundoazul.png')"
    imagem.style.backgroundImage = "url('imagens/funcionario.png')"
    cadastrar.style.display = "none"

    entrar.href = "funcionario.html"
    entrar.style.backgroundColor = "var(--botaoAzul)"
    entrar.style.borderColor = "var(--botaoAzul)"

    buttonHos.style.backgroundColor = "var(--corEscura2)"
    buttonHos.style.color = "var(--branco)"
    buttonFun.style.backgroundColor = "var(--branco)"
    buttonFun.style.color = "var(--botaoAzul)"
}