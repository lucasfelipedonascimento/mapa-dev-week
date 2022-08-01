/* 

OBJETIVO - 1 - Quando clicarmos na seta de avançar, temos que mostrar o próximo cartão
    · Passo 1: Dar um jeito de pegar o elemento HTML da seta avançar
    
    · Passo 2: Dar um jeito de identificar o clique do usuário na seta avançar

    · Passo 3: Fazer aparecer o próximo cartão da lista

    · Passo 4: Buscar o cartão atual selecionado e esconder

*/
// · Passo 1: Dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById('btn-Avancar');
const btnVoltar = document.getElementById('btn-Voltar')
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    // · Buscar o cartão atual selecionado e esconder
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function adicionarClasseSelecionado(indiceCartao) {
    // · Fazer aparecer o próximo cartão da lista
    cartoes[indiceCartao].classList.add('selecionado');
}

// · Passo 2: Dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function (){
    if (cartaoAtual === cartoes.length - 1) return 

    // · Buscar o cartão atual selecionado e esconder
    esconderCartaoSelecionado();

   // · Fazer aparecer o próximo cartão da lista
   cartaoAtual++;
   adicionarClasseSelecionado(cartaoAtual); 
})


/*

OBJETIVO - 2 - Quando clicarmos na seta de voltar, temos que mostrar o cartão anterior
    · Passo 1: Dar um jeito de pegar o elemento HTML da seta voltar
    
    · Passo 2: Dar um jeito de identificar o clique do usuário na seta voltar

    · Passo 3: Fazer aparecer o cartão anterior da lista

    · Passo 4: Buscar o cartão atual selecionado e esconder    

*/
btnVoltar.addEventListener('click', function () {
    if (cartaoAtual === 0) return

    // · Buscar o cartão atual selecionado e esconder
    esconderCartaoSelecionado();

    // · Fazer aparecer o cartão anterior da lista
    cartaoAtual--;
    adicionarClasseSelecionado(cartaoAtual);
})
