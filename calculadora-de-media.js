const input = require("readline-sync")

console.log("Calcule sua media")

const nota1 = input.question('Informe nota 1 ')
const nota2 = input.question('Informe nota 2 ')
const nota3 = input.question('Informe nota 3 ')
const nota4 = input.question('Informe nota 4 ')
const nota5 = input.question('Informe nota 5 ')
const nota6 = input.question('Informe nota 6 ')

const media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) / 6


if (media >= 7){
    console.log("Aprovada")
    } else if (media < 5){
        console.log("Reprovado")
    } else {
        console.log("Recuperacao ")
        }


 