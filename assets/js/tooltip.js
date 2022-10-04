// Utilizando tooltip - Eventos com JavaScript

// Selecionando elementos HTML
const tooltip = document.querySelector('#tooltip');
const body = document.querySelector('body');
const header = document.querySelector('.top-site');

// sintaxe para adicionar evento
// alvo.addEventListiner('evento', função)
/*
body.addEventListener('mouseover', () => {
    body.style.background = 'gray';
})
body.addEventListener('mouseout', () => {
    body.style.background = 'unset'; // unset desativa 
})
*/

tooltip.addEventListener('mouseover', (e) => {
    console.log('Altura da página', body.clientHeight);
    console.log('Largura da página', body.clientWidth);
    console.log('Altura do Tootip', tooltip.clientHeight);
    console.log('Largura do tooltip', tooltip.clientWidth);
    console.log('Altura do mouse', e.clientY);
    console.log('Lagura do mouse', e.clientX);

    if (document.querySelector('.tooltip')) {
        document.querySelector('.tooltip').remove();
    }
    const newDiv = document.createElement('div');
    const largura = 200;
    newDiv.classList.add('tooltip');
    newDiv.innerText = 'Minions ipsum gelatooo uuuhhh para tú bappleees para tú tank yuuu! Gelatooo po kass.';
    newDiv.style.position = 'absolute';
    newDiv.style.top = e.clientY + 'px';
    const getNewDiv = document.querySelector('.tooltip');
    newDiv.style.display = 'flex';
    newDiv.style.width = largura + 'px'
    newDiv.style.left = (e.clientX + largura > body.clientWidth ? e.clientX - largura - 20 : e.clientX + largura) + 'px';
    console.log(newDiv.style.width);
    header.appendChild(newDiv);
})
tooltip.addEventListener('mouseout', () => {
    if (document.querySelector('.tooltip')) {
        document.querySelector('.tooltip').remove();
    }
})
