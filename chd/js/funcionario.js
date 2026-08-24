
var tabela = document.getElementById("tabela")
var cadastrar = document.getElementById("cadastrar")
var titulo = document.getElementById("titulo")

function tab () {
    tabela.style.display = "flex"
    cadastrar.style.display = "none"
    titulo.textContent = "Tabela de Pacientes"
}

function cad () {
    tabela.style.display = "none"
    cadastrar.style.display = "flex"
    titulo.textContent = "Cadastro do paciente"
}