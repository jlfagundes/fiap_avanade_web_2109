// trabalhando com JavaScript em um arquivo externo
/*
const nome = "FIAP"
console.log(nome, 'chamando variavel criada com var');

// escreve("Exemplo de função Nominal (udf)");

function escreve(titulo) {
    alert(titulo);
}

// function expression (expressão de função) usando uma função anonima (quando não tem nome)
const mudaTitulo = function(newText) {
    document.querySelector('title').innerHTML = newText;
}

// mudaTitulo('Trocando titulo da página');


// usando setInterval
const relogio  = function() {
    const data = new Date();
    document.querySelector('title').innerHTML = data.toLocaleTimeString();
}

// setInterval(relogio, 1000)
*/ 
/* Percorrendo um array com setInterval() */

const phrases = ['teste 1', 'teste 2'];

const randomPhrases = function (target, arrText, time) {
    let i = 0;
    setInterval(() => {
        if (arrText[i]) {
            console.log(arrText[i++]);
        } else {
            i = 0;
        }
    }, time);
};

