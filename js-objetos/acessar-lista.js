const cliente = {
    nome:"Rafael",
    idade:30,
    cpf:"23434343532",
    email:"rafael@gmail.com"
}

const chaves =["nome", "idade", "cpf", "email"]

//console.log(cliente[chaves[0]])


// acessar lista completa
chaves.forEach(info => console.log(cliente[info]))

console.log(cliente[`nome`])


