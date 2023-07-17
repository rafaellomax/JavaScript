const cliente = {
    nome:"Rafael",
    idade:30,
    cpf:"23434343532",
    email:"rafael@gmail.com",
    fones:["092839084","3908430984"]
}

cliente.dependentes = {
    nome:"Rafaela",
    parentesco:"Filha",
    dataNasc:"10/02/2013"
}

const chaves =["nome", "idade", "cpf", "email","fones","dependentes"]
chaves.forEach(info => console.log(cliente[info]))

//console.log(cliente)