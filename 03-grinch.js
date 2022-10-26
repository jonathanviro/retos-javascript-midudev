const isValido = (carta) => {
    const arrCarta = carta.split(" ").filter(e => e !== "");
    
    console.log(arrCarta)

    for (let i = 0; i < arrCarta.length; i++) { 
        console.log(arrCarta[i]);
        if (arrCarta[i].slice(0, 1) === '{' || arrCarta[i].slice(0, 1) === '[' || arrCarta[i].slice(0, 1) === ')') {
            return false;
        }
        
        if (arrCarta[i].slice(0, 1) === '(') {
            if (arrCarta[i].slice(arrCarta[i].length - 1) !== ')') {
                return false;
            } else if (arrCarta[i].slice(arrCarta[i].length - 1) === ')') { 
                if (arrCarta[i].length === 2) {
                    return false;
                } else if (arrCarta[i].slice(1, arrCarta[i].length - 1).includes('(', '{', '[')) {
                    return false;
                }
            }
        } 
    }

    return true;
}



const carta = 'bici coche (balón) bici coche peluche';
const carta2 = '(muñeca) consola bici';
const carta3 = 'bici coche (balón bici coche';
const carta4 = 'peluche (bici [coche) bici coche balón';
const carta5 = '(peluche {) bici';
const carta6 = '() bici';
const carta7 = "(()) bici"
const carta8 = ')bici( casa play';

console.log(isValido(carta));
console.log(isValido(carta2));
console.log(isValido(carta3));
console.log(isValido(carta4));
console.log(isValido(carta5));
console.log(isValido(carta6));
console.log(isValido(carta7));
console.log(isValido(carta8));
