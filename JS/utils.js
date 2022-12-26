export function calculateIMC(weight,height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}
export function notANumber (value) {
  return isNaN(value) || value == "" // essa função vai me responder SIM(true) ou NÃO(false) a pergunta: "o caractere inserido é qualquer coisa menos um número?"
}// o resultado é função é um boolean!
