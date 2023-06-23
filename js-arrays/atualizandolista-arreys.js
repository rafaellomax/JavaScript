const listaDeChamadas = ['João', 'Ana', 'Caio', 'Laura', 'Marjorie', 'Leo']

function mostra(frase){
    console.log(frase)
}

//listaDeChamadas.splice(1,2,'Rafael')
listaDeChamadas.splice(2,0,'Rafael') // ao colocar 0 no segundo parametro ele nao altera a lista e adiconoa o terceiro paramentro


mostra(`Lista de chamadas: ${listaDeChamadas}`)
