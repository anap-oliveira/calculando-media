const input = require("readline-sync")

console.log("Calcule sua media")

const nota1 = input.question('Informe nota 1 ')
const nota2 = input.question('Informe nota 2 ')
const nota3 = input.question('Informe nota 3 ')
const nota4 = input.question('Informe nota 4 ')
const nota5 = input.question('Informe nota 5 ')
const nota6 = input.question('Informe nota 6 ')

const media = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) / 6

console.log(media.toFixed(2))

if (media >= 7){
    console.log("Aprovada")
    } else if (media < 5){
        console.log("Reprovado")
    } else {
        console.log("Recuperacao ")
        }


 