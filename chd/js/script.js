
var fundo = document.getElementById("main")
var imagem = document.getElementById("imagem")
var entrar = document.getElementById("entrar")
var buttonFun = document.getElementById("funcionario")
var buttonHos = document.getElementById("hospital")
var login = document.getElementById("login")
var senha = document.getElementById("senha-label")

function hos () {
    fundo.style.backgroundImage = "url('imagens/fundovermelho.png')"
    imagem.style.backgroundImage = "url('imagens/paciente.png')"
    login.style.display = "none"
    senha.textContent = "CPF:"

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
    login.style.display = "block"
    senha.textContent = "Senha:"

    entrar.href = "funcionario.html"
    entrar.style.backgroundColor = "var(--botaoAzul)"
    entrar.style.borderColor = "var(--botaoAzul)"

    buttonHos.style.backgroundColor = "var(--corEscura2)"
    buttonHos.style.color = "var(--branco)"
    buttonFun.style.backgroundColor = "var(--branco)"
    buttonFun.style.color = "var(--botaoAzul)"
}