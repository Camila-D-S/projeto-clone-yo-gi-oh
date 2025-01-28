const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");

let cartaoAtual = 0


cartoes.forEach(cartao =>{
    cartao.addEventListener("click", function(){
        const cartaVirada = cartao.querySelector(".carta-virada")

        //virar o cartao
        cartao.classList.toggle("virar") /*toggle seria alternar*/
       //mostrar o fundo da carta
        cartaVirada.classList.toggle("mostrar-fundo-carta");

        const descricao = cartao.querySelector(".descricao");
        descricao.classList.toggle("esconder");
    });    
});


btnAvancar.addEventListener("click", function(){
    if(cartaoAtual === cartoes.length - 1)//para cartão atual aparecer como 6
    return;

    esconderCartaoSelecionado();

    mostrarCartao(cartaoAtual);
    cartaoAtual ++;
});

btnVoltar.addEventListener("click", function(){
    if(cartaoAtual === 0)return;

    esconderCartaoSelecionado();

    cartaoAtual --;
    mostrarCartao(cartaoAtual);
});

/*refatorados*/
function mostrarCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");

    cartaoSelecionado.classList.remove("selecionado");
}
