import {Modal} from './modal.js'
import { alertError } from './error.js';
import {calculateIMC } from './utils.js';
import { notANumber } from './utils.js';

// MAPEAR AS VARIÁVEIS
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//ESTRUTURANDO OS DADOS DO MODAL
//Para melhorar a organização de isformações e dar mais clareza às responsabilidades de cada função e veriável podemos trocas as const abaixo por uma const Modal  que contém um object literals que contém propriedades que configuram apenas o MODAL
// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalCloseBtn = document.querySelector('.modal .close')
//pra melhorar mais ainda passei esses valores para outro arquivo usando modularização e importei de voltar pro arquivo main com a ferramenta import export

/*3 maneiras de criar e atribuir função a um evento 
 1.
form.onsubmit = handleSubmit
function handleSubmit() {
}

2.
form.onsubmit = function () {
}

3.
calcIMC.onsubmit = () => {}

*/
form.onsubmit = event => { //Sempre que eu clicar no botão 'submit' do form 1.Ele vai tentar enviar o formulário e recarregar a página 2. coletar os valores inseridos nos inputs
    event.preventDefault() // O padrão do clique em um botão 'submit' é enviar o formulário e enviar a página, para previnir que isso aconteça usamos preventDefault

    let weight = inputWeight.value//coletar os valores
    let height = inputHeight.value//coletar os valores
    // vamos usar aquela função notANumber que vai receber os valores inseridos em weight e height e atribuir o resultado (true  or false) a uma const que vai fazer referencia a mensagem de alerta
    const weightOrHeightIsNotANumeber = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNotANumeber){
      alertError.open()
      return
    }
    //se depois disso eu inserir apenas números e apertar enter aí fecha o alerta e mostra o modal
    alertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage (result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()

    inputWeight.value = ""
    inputHeight.value = ""
}

form.oninput = () => {
    alertError.close()
}