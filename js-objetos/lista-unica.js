const clientes = [
    {
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
        }]
    },
    {
        nome:"Camila",
        idade:26,
        cpf:"33433434352",
        email:"camila@gmail.com",
        fones:["344445","390843084"],
        dependentes: [
        {
            nome:"Alice",
            parentesco:"Filha",
            dataNasc:"10/02/2013"}
        ],
    }
]

//operador de espalhamento
const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes)
