var tabela = document.getElementById("tabela")
var cadastrar = document.getElementById("cadastrar")

function tab () {
    tabela.style.display = "flex"
    cadastrar.style.display = "none"
}

function cad () {
    tabela.style.display = "none"
    cadastrar.style.display = "flex"
}