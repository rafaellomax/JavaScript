const cliente = {
    nome:"Rafael",
    idade:30,
    cpf:"23434343532",
    email:"rafael@gmail.com",
    fones:["092839084","3908430984"],
    dependentes: [
        {
            nome:"Rafaela",
            parentesco:"Filha",
            dataNasc:"10/02/2013"},
        {    
            nome:"Rafael",
            parentesco:"Filho",
            dataNasc:"15/12/2010"
        }
    ],
    saldo:100,

    depositar:function(valor){
        this.saldo += valor
    }
}

function oferecerSeguro(obj){
    const propsCliente =Object.keys(obj);
    if(propsCliente.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vidada para ${obj.nome}`);
    }
}

//chaves
console.log(Object.keys(cliente))

// valores
console.log(Object.values(cliente))

// chaves e valores
console.log(Object.entries(cliente))


oferecerSeguro(cliente)