const cliente = {
    nome:"Rafael",
    idade:30,
    cpf:"23434343532",
    email:"rafael@gmail.com",
    fones:["092839084","3908430984"]
}

cliente.dependentes = [{
    nome:"Rafaela",
    parentesco:"Filha",
    dataNasc:"10/02/2013"
}]

cliente.dependentes.push({
    nome:"Rafael",
    parentesco:"Filho",
    dataNasc:"15/12/2010"
})

cliente.dependentes.push({
    nome:"defafe",
    parentesco:"Filho",
    dataNasc:"15/12/2010"
})

console.log(cliente)

const filhoMaisNovo = cliente.dependentes.filter(dependentes => dependentes.dataNasc==="15/12/2010")

//console.log(filhoMaisNovo)
//console.log(filhoMaisNovo[0].nome)