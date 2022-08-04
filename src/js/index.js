const btnvoltar = document.getElementById("btn-voltar");
const btnavancar = document.getElementById("btn-avancar");
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");  
}

function mostrarCartao (indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}
const cartoes = document.querySelectorAll(".cartao");
btnvoltar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
    esconderCartaoSelecionado();

});

btnavancar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;
    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual)

    });