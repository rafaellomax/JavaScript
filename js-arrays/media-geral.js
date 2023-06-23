const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notaDaSala){
   const somaDasNotas = notaDaSala.reduce((acum, atual) =>
   atual +acum, 0)
   return somaDasNotas/notaDaSala.length
}
console.log(` Media da sala de JavaScript ${mediaSala(salaJS)}`)
console.log(` Media da sala de Java ${mediaSala(salaJava)}`)
console.log(` Media da sala de Python ${mediaSala(salaPython)}`)

// -----------------------------------------------------------------
const notas =[10, 6.5, 8, 7]
let somaDasNotas =0

for(i=0; i<notas.length; i++){
   somaDasNotas += notas[i]
}
let media =somaDasNotas/notas.length
console.log(media)

//-----------------------------------------------------------
const notas = [10, 6.5, 8, 7]
let somaDasNotas = 0

notas.forEach(function(nota){
    somaDasNotas += nota
})

let media = somaDasNotas/notas.length

console.log(media)

//----------------------------------------------------------
const notas = [10, 6.5, 8, 7]
const media = notas.reduce((acum, atual) => atual + acum, 0) /notas.length

console.log(media)




