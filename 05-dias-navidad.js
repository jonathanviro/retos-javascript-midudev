const diasParaNavidad = (fecha) => {
    const dateNavidad = new Date('Dec 25, 2021');
    const restaMilisegundos = dateNavidad.getTime() - fecha.getTime();
    const diasTranscurridos = restaMilisegundos / (1000 * 60 * 60 * 24);

    /*Para cuando el calculo de los dias no sea entero se sumara 0.5 a los decimales 
    para que el numero se pueda redondear correctamente*/
    return Number.isInteger(diasTranscurridos)
        ? Math.round(diasTranscurridos)
        : Math.round(diasTranscurridos + 0.5);
};

const testFechas = [
    'Dec 1, 2021',
    'Dec 24, 2021 00:00:01',
    'Dec 24, 2021 23:59:59',
    'December 20, 2021 03:24:00',
    'Dec 25, 2021',
    'Dec 26, 2021',
    'Dec 31, 2021',
    'Jan 1, 2022 00:00:01',
    'Jan 1, 2022 23:59:59'
]

testFechas.forEach( e => console.log(`Faltan ${diasParaNavidad(new Date(e))} para Navidad`));




