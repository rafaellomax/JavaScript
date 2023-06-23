function mostra (frase){
    console.log(frase);
}

function apresetar (nome){
    return `meu nome é ${nome}`;
}

//Arrow Function
const apresetaArrow =nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;
//console.log(soma(1,2))

// Arrow function + de uma linha

const somaNumerosPequenos = (num1, num2) =>{
    if (num1 > 10 || num2 > 10){
        return 'somente números de 1 a 9'
    }else{
        return num1 + num2;
    }
}
console.log(somaNumerosPequenos(5,5))


//function

function somaNumeros (num1,num2) {
    if (num1 > 10 || num2 > 10){
        return 'somente números de 1 a 9'
    }else{
        return num1 + num2;
    }
}

console.log(somaNumeros(1,2))


