// diferença do arrow functions e outros tipos

const resultado = document.querySelector('#resultado');

/* 
let myFunc1 = {
    showArguments() {
        resultado.innerHTML = arguments;
        console.log(arguments);
    }
}

// chamando a função
myFunc1.showArguments(
    "Vai Palmeiras",
    "FullStack Developer"
    )
*/    
    
/*
// testando outro recurso, usar o spread ... no lugar do arguments - criado no ES6
    let myFunc2 = {
    showArguments() {
        resultado.innerHTML = arguments;
        console.log(...arguments);
    }
}

myFunc2.showArguments(
    "Vai Palmeiras",
    "FullStack Developer"
    )
*/

let user = {
    name: "Fagundes",
    usandoArrow: () => {
        console.log(`na Arrow, meu nome é ${this.name}`)
    },
    usandoNominal: function() {
        console.log(`na Nominal, meu nome é ${this.name}`)
    },
}

user.usandoArrow();
user.usandoNominal();