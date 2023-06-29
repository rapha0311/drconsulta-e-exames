const imagens = document.querySelectorAll(".slide");
const avancar = document.getElementById("seta-avancar");
const retornar = document.getElementById("seta-voltar");
let imagemAtual = 0;

avancar.addEventListener("click", function () {

    if (imagemAtual === imagens.length - 1) {
        return
    }

    imagemAtual++;
    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
});

retornar.addEventListener("click", function () {

    if (imagemAtual === 0) {
        return
    }

    imagemAtual--;
    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
});

function mostrarImagem() {
    imagens[imagemAtual].classList.add("mostrar");
}

function esconderImagemAberta() {
    const imagemAberta = document.querySelector(".mostrar");
    imagemAberta.classList.remove("mostrar");
}

function mostrarOuEsconderSetas() {
    const naoEhPrimeiraImagem = imagemAtual !== 0;
    if (naoEhPrimeiraImagem) {
        retornar.classList.remove("opacidade");
    } else {
        retornar.classList.add("opacidade");
    }

    const ehUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1;
    if (ehUltimaImagem) {
        avancar.classList.add("opacidade");
    } else {
        avancar.classList.remove("opacidade");
    }
}