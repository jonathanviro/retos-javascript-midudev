const crearArbolNavidad = (altura) => {
    if (altura > 0 && altura <= 100) {
        const dibujarBase = (altura) => {
            let linea = '';
            let cantidadCaracteres = altura * 2 - 1;

            for (let i = 0; i < cantidadCaracteres; i++) {
                if (i === altura - 1) {
                    linea = linea + '#';
                } else {
                    linea = linea + '_';
                }
            }
            linea = linea + '\n';

            return linea;
        };

        /* El numero de Guiones bajos que tendra la rama principal seran iguales a => (altura - la rama en la que se este recorriendo)
           Ejemplo: Si la altura es 5 la rama #1 tendra 4 guiones bajo al principio y 4 al final. 
                    Luego se tiene la rama #2 por lo que ahora tendremos 3 guiones bajo al principio y 3 al final. 
                    Una vez lleguemos a la rama #5 el numero de guiones bajos al principio y al final seran de 0 por lo que ya no se dibujaran.
        */

        const dibujarHojas = (altura) => {
            let linea = '';
            let cantidadHojas = 1;
            let conjuntoRamas = '';

            // Se evalua en que rama se está. Para ello se toma como referencia la altura requerida
            for (let rama = 1; rama <= altura; rama++) {
                let continuar = true; //Se usa para crear los guiones bajos del principio y del final
                while (continuar) {
                    // Una vez que la cantidad de guiones bajos que tenga la linea sea igual a (altura - la rama en la que se este recorriendo) se proceden a dibujar las hojas
                    if (linea.length === altura - rama) {
                        //La cantidad de hojas a dibujar se ira incremendo en 2 por cada rama pasada a excepcion de la primera
                        for (let i = 0; i < cantidadHojas; i++) {
                            linea = linea + '*';
                        }

                        cantidadHojas = cantidadHojas + 2; //La cantidad de hojas a sumarse en la sgte rama
                        continuar = false; //bandera para no repetir el ciclo
                    }

                    //Creacion de guiones bajos
                    for (let i = 0; i < altura - rama; i++) {
                        linea = linea + '_';
                    }
                }

                linea = linea + '\n'; //Se añade salto de linea al final de la linea
                conjuntoRamas = conjuntoRamas + linea; //Unimos la linea en un solo string
                linea = ''; //Se vacia la linea para crear una nueva
            }
            return conjuntoRamas;
        };

        const base = dibujarBase(altura);
        const hojas = dibujarHojas(altura);
        const arbol = hojas + base + base;

        return arbol.slice(0, arbol.length-1);  //Retornamos el arbol completo sin el ultimo salto de linea para que no se caiga en los test
    } else { 
        return 'Altura no permitida'
    }
};

console.log(crearArbolNavidad(10));





