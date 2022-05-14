
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length
    return promedioLista;
}

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function obtenerMediana(lista) {
    lista.sort(function(a,b){
        console.log(a-b);
        return a - b;
    });

    let mediana;
    const mitadLista = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
    
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
        mediana = promedioElemento1y2;
    } else {
        mediana = lista[mitadLista];
    }

    return mediana;
}