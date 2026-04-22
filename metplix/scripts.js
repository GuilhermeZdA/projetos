/*var dialog = document.querySelector('#modalDialog1')
var openModal = document.querySelector('#openModal')
var closeModal = document.querySelector('#closeModal')

openModal.addEventListener("click", (e) => {
    dialog.showModal();
});

closeModal.addEventListener("click", (e) => {
    dialog.close();
});

Pretendo fazer no futuro
*/

function verificar() {
    var p1 = document.getElementById('p1')
    var p2 = document.getElementById('p2')
    var p3 = document.getElementById('p3') 

    if (window.getComputedStyle(p1).display == 'none') {
        e1 = true
    } else {
        e1 = false
    }

    if (window.getComputedStyle(p2).display == 'none') {
        e2 = true
    } else {
        e2 = false
    }

    if (window.getComputedStyle(p3).display == 'none') {
        e3 = true
    } else {
        e3 = false
    }
}

document.addEventListener("DOMContentLoaded", verificar);

function abrirFechar1() {
    if (e1 == true) {
        e1 = false
        p1.style.display = 'block'
    } else if ( e1 == false) {
        e1 = true
        p1.style.display = 'none'
    }
}

function abrirFechar2() {
    if (e2 == true) {
        e2 = false
        p2.style.display = 'block'
    } else if ( e2 == false) {
        e2 = true
        p2.style.display = 'none'
    }
}

function abrirFechar3() {
    if (e3 == true) {
        e3 = false
        p3.style.display = 'block'
    } else if ( e3 == false) {
        e3 = true
        p3.style.display = 'none'
    }
}

