const carta = 'bici coche balón    _playstation bici coche peluche';

let obj = {};


const listGifts = (carta) => {
    
    const arrCadena = carta.split(' ');
    const arrCadenaSinEspacio = arrCadena.filter((cadena) => cadena !== '' && cadena.slice(0, 1) !== '_');
    
    let obj = {};
    const llenarObj = (propiedad, valor) => {
        obj = { ...obj, [propiedad]: valor };
    };


    arrCadenaSinEspacio.forEach((elemento) => {
        let contador = 0;
        arrCadenaSinEspacio.forEach((e) => (e === elemento ? contador++ : 0));
        llenarObj(elemento, contador);
    });

    return obj;
};

const regalos = listGifts(carta);

console.log(regalos);