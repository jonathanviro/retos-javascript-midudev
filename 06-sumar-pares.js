const sumarPartes = (numeros, resultado) => { 
    let numsSuma = [];

    for (let i = 0; i < numeros.length; i++) {
        i = 0; //Cuando no se haya encontrado los numeros que sumados sean iguales a la respuesta esperada. Se procede reiniciar el for en 0 para que se empiece desde la primera posicion
        // console.log(numeros, resultado);
        let j = 1;
        for (j; j < numeros.length; j++) {
            let suma = numeros[i] + numeros[j];
            // console.log(`${numeros[i]} + ${numeros[j]} = ${suma}`);
            if (suma === resultado) {
                numsSuma.push(numeros[i]);
                numsSuma.push(numeros[j]);
                console.log('Resultado', numsSuma);
                return numsSuma;
            }

            //Se evalua si en el recorrido actual no hay numeros iguales para no tener que recorrer las mismas situaciones dos veces
            if (numeros[i] === numeros[j]) {
                break;
            }
        }
        numeros.shift();
    }

    if (!numsSuma.length) {
        console.log('Resultado', null);
        return null;
    }
}


sumarPartes([3, 5, 7, 2], 10) // [3, 7]
sumarPartes([-3, -2, 7, -5], 10) // null
sumarPartes([2, 2, 3, 1], 4) // [2, 2]
sumarPartes([6, 7, 1, 2], 8) // [6, 2]
sumarPartes([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]
