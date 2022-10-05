// trabalhando com fetch
const cep = document.querySelector('#cep');

cep.addEventListener('blur', async (e) => {
    let search = cep.value.replace('-', ''); // procura o '-' e substitui por vazio
    console.log(search);
    if (search.length < 8 || Number(search.value) === NaN) {
        alert('CEP inválido')
        cep.focus();
        return;
    }

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
    }

    // recurso assíncrono retorna uma promisse porque não sei se vai funcionar
    /*
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then((response) => {
            response.json()
                .then((result) => {
                    console.log('deu certo =>', result)
                })
        })
        .catch((err) => {console.log('erro', err.message)})
        */
        
        // usando o async/await
        const resultado = await fetch(`https://viacep.com.br/ws/${search}/json/`, options);
        const json = await resultado.json();
        console.log('resultado em json', json);
})
