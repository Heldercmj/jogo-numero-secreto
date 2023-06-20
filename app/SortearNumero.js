
const menorValor = 1
const maiorValor = 100

elementoMenorValor = document.querySelector('#menor-valor')
elementoMaiorValor = document.querySelector('#maior-valor')

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor

const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * (maiorValor + 1))
}

console.log("Numéro secreto: ", numeroSecreto)
