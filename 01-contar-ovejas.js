const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

const contarOvejas = (ovejas) => {
  const ovejasRojas = ovejas.filter(oveja => oveja.color === 'rojo');
  const ovejasNA = [];

  ovejasRojas.forEach(oveja => {
      if ((oveja.name.includes('N') || oveja.name.includes('n')) && (oveja.name.includes('A') || oveja.name.includes('a'))) { 
        ovejasNA.push(oveja);
      }
  });

  return ovejasNA;
}


const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);