// trabalhando com arrays
const carrosDOM = document.querySelector('#carros');

const veiculos = ['Chevrolet', 'Ford', 'Fiat', 'Vw', 'Honda', 'Toyota', 'Hyundai'];

veiculos.push('BMW'); // acrescenta no final do array
veiculos.unshift('Audi'); // acrescenta no inicio do array
const ultimo = veiculos.pop() // remove o ultimo item do array, tbm retorno o que removeu
console.log(`foi removido o ultimo item -> ${ultimo}`)
const primeiro = veiculos.shift(); // remove o primeiro item e retorno o que removeu
console.log(`foi removido o primeiro item -> ${primeiro}`)

// array.splice(posição, quantos_remover?) - mesmo array
veiculos.slice(2, 1) // remove 1 na posição 2
veiculos.slice(2, 1, "Novo carro") // remove 1 na posição 2 e acrescenta "Novo Carro", na posição 2

veiculos.forEach((value, key, allValue) => {
    carrosDOM.innerHTML += `<option value="${key}">${value}</option>}`;
});

// usando o slice que cria um novo array
const nbaTeams = ["Warrior", "Raptors", "bucks", "lakers", "celtics"];

const newTeamsNba = nbaTeams.slice(1,3); // retorna da posição 1 e 2 não retorna na posição 3
const newTeamsNba2 = nbaTeams.slice(-1); // retorna o ultimo ou slice(-1)
const newTeamsNba3 = nbaTeams.slice(0,1); // retorna o primeiro

console.log(`times retirados com o slice -> ${newTeamsNba}`);
console.log(`times originais -> ${nbaTeams}`);
console.log(`ultimo time retirados com o slice -> ${newTeamsNba2}`);
console.log(`primeiro time retirados com o slice -> ${newTeamsNba3}`);

// funçoes de percorrer arrays
const myName = "José Luiz Fagundes"
const arrayName = myName.split(' ') // converte em array
console.log(arrayName[0] + ' sobrenome -> ' + arrayName.slice(-1))
const newMyName = arrayName.join(' ');
console.log(`arrayNome com join ${newMyName}`)

// usando o map()

const procuraCeltics = (nomeTime) => {
    return nomeTime == "celtics" || nomeTime == "bucks";
}

const celticsMap = nbaTeams.map(procuraCeltics);
const celticsFilter = nbaTeams.filter(procuraCeltics);
const celticsFind = nbaTeams.find(procuraCeltics);

console.log('variavel celticsMap -> ', celticsMap);
console.log('variavel celticsFilter -> ', celticsFilter);
console.log('variavel celticsFind -> ', celticsFind);