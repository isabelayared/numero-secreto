let numeroSecreto = gerarNumeroAleatorio();
//let título = document.querySelector('h1')
//título.innerHTML = 'jogo do número secreto';

//let paragrafo = document.querySelector('p');
p//aragrafo.innerHTML = 'escolha um número entre 1 e 10';

function exibirTextoNaTela (tag){
    let campo = document.querySelector (tag)
    campo.innerHTML = texto;
}

exibirTextoNaTela ('h1, jogo do número secreto');

exibirTextoNaTela ('p, escolha um número entre 1 e 100');

function verificarChute (){
    console.log('numeroSecreto!');
}
 function gerarNumeroAleatorio () {
 return  parseInt (Math.random () *10+1);
}