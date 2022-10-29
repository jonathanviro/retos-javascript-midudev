const almacen = {
    estanteria1: {
        cajon1: {
            producto1: 'coca-cola',
            producto2: 'fanta',
            producto3: 'sprite',
        },
    },
    estanteria2: {
        cajon1: 'vacio',
        cajon2: {
            producto1: 'pantalones',
            producto2: 'camiseta', // <- ¡Está aquí!
        },
    },
};

const otroAlmacen = {
    baul: {
        fondo: {
            objeto: 'cd-rom',
            'otro-objeto': 'disquette',
            'otra-cosa': 'mando',
        },
    },
};

const buscarProducto = (almacen, busqueda) => {
    /*NOTAS: 
        1. Se realiza una busqueda recursiva si el elemento a evaluarse "elemento" es un objeto. De esta 
        manera se evaluaran el valor de sus propiedades internas
        2. Se implementa una variable Global Booleana para que una vez terminado de recorrer la funcion 
        map se returne el valor guardado si se encuentra*/
    
    let booSeEncontro = false;
    const busquedaRecursiva = (objetoAlmacen, producto) => {
        Object.values(objetoAlmacen).map((elemento) => {
            console.log('Valor evaluandose', elemento)
            if (typeof elemento === 'object') {
                busquedaRecursiva(elemento, producto);
            } else {
                if (elemento === producto) {
                    booSeEncontro = true;
                }
            }
        });
    };

    busquedaRecursiva(almacen, busqueda);

    return booSeEncontro;
};

console.log(buscarProducto(almacen, 'camiseta'));
console.log(buscarProducto(otroAlmacen, 'gameboy'));
