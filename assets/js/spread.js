/*
// desestruturando array
const airNac = ['Azul', 'Gol', 'Latam'];

const airInt = [...airNac, 'Delta', 'United Airlines'];

console.log('valor dentro de airInt => ', airInt);

const [azul, gol, latam, delta, ...internationals] = airInt;

console.log('variaveis extraidas de airInt => ', azul, gol, latam, delta, internationals);

console.log('valor dentro de airInt depois de desestruturar => ', airInt);


// desestruturando objeto

const userData = {
    name: "jose",
    email: "jlfagundes@gmail.com",
    password: "123456",
};

const {password, ...data} = userData;

console.log('dados do objeto userData => ', data)
*/

// Aprendendo sobre eventos
//eventos - JavaScript é uma linguagem dirigida a eventos. Algo acontece, então reagimos.
// Eventos de tempo - setTimeout (espera o tempo e executa 1 vez), setInterval (executa a cada intervalo de tempo)
// Eventos de DOM - onClick, onChange, onSubmit (manipular o HTML)
// Eventos de teclado - onKeyDown, onKeyUp, onKeyPress
// Eventos de mouse - onMouseDown, onMouseUp, onMouseMove
// Eventos de formulário - onFocus (clica no campo), onBlur (sai do campo), onChange
// Eventos de mídia - onPlay, onPause, onEnded
// Eventos de rede - onLoad (quando a pagina carregou, imagem carregou ou não), onError, onAbort

const body = document.querySelector('body');
body.style.width = '100%';
body.style.height = '100vh';

// body.addEventListener('mouseover', (event) => {
body.addEventListener('click', (event) => {
body.style.background = '#d4d4d4'
    console.log('executou o evento')
});

console.log('teste')

// setTimeout(() => {
//     // alert("Teste de alerta e piscar barra de tarefa")
//     window.focus;
// }, 5000);

// function pisca(){
// 	if(window.focus()) window.blur();
// 	else window.focus();
// }
// setInterval(pisca, 500);

// teste de piscar a o navegador na barra de tarefas
// var oldTitle = document.title;
// var msg = "New Popup!";
// var timeoutId = false;

// var blink = function() {
//     document.title = document.title == msg ? oldTitle : msg;//Modify Title in case a popup

//     if(document.hasFocus())//Stop blinking and restore the Application Title
//     {
//         document.title = oldTitle;
//         clearInterval(timeoutId);
//     }                       
// };

// if (!timeoutId) {
//     timeoutId = setInterval(blink, 500);//Initiate the Blink Call
// };//Blink logic 


// usando materialize biblioteca
function testeAlerta() {
    var toastHTML = '<span>I am toast content</span><button class="btn-flat toast-action">Undo</button>';
    M.toast({html: toastHTML});
  
}

// setInterval(testeAlerta, 5000)
