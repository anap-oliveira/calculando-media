const input = require("readline-sync")

console.log("Calcule sua media")

const nota1 = input.question('Informe nota 1 ')
const nota2 = input.question('Informe nota 2 ')
const nota3 = input.question('Informe nota 3 ')
const nota4 = input.question('Informe nota 4 ')
const nota5 = input.question('Informe nota 5 ')
const nota6 = input.question('Informe nota 6 ')

const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6)) / 6

console.log(media.toFixed(2))

console.log(`==== Sua média foi: ${media.toFixed(1)} ====`)

if (media >= 7){
    console.log("Parabéns! Você foi aprovada!")
    } else if (media < 5){
        console.log("Você foi reprovada, não foi dessa vez.")
    } else {
        console.log("Se esforce mais um pouco, você está em recuperacao. ")
        }


 