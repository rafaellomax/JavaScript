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

let relatorio="";

for( let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente [info] === "function"){
        continue
    }else {
        relatorio += `
        ${info} ==> ${cliente[info]}
        ` 
    }
}

console.log(typeof cliente.depositar)
console.log(relatorio)