// Utilizando tooltip - Eventos com JavaScript

// Selecionando elementos HTML
// const tooltip = document.querySelector('#tooltip');
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

const tooltip = function (target, message) {
    const targetElement = document.querySelector(target);
    targetElement.addEventListener('mouseover', (e) => {
        if (document.querySelector('.tooltip')) {
            document.querySelector('.tooltip').remove();
        }
        const newDiv = document.createElement('div');
        const largura = 200;
        newDiv.classList.add('tooltip');
        newDiv.innerText = message;
        newDiv.style.position = 'absolute';
        newDiv.style.top = e.clientY + 'px';
        newDiv.style.width = largura + 'px';
        newDiv.style.left = (e.clientX + largura > body.clientWidth ? e.clientX - largura - 20 : e.clientX + largura) + 'px';
        newDiv.style.display = 'flex';
        targetElement.parentNode.appendChild(newDiv);
        // console.log('Altura da página', body.clientHeight);
        // console.log('Largura da página', body.clientWidth);
        // console.log('Altura do Tootip', tooltip.clientHeight);
        // console.log('Largura do tooltip', tooltip.clientWidth);
        // console.log('Altura do mouse', e.clientY);
        // console.log('Lagura do mouse', e.clientX);
    })
    targetElement.addEventListener('mouseout', () => {
        if (document.querySelector('.tooltip')) {
            document.querySelector('.tooltip').remove();
        }
    })
}


tooltip("#tooltip", 'Minions ipsum gelatooo uuuhhh para tú bappleees para tú tank yuuu! Gelatooo po kass.');

