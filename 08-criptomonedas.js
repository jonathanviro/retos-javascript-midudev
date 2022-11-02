const maxProfit = (precios) => { 
    let ganancias = 0;
    precios.forEach((item, index) => {
        const rest = precios.slice(index + 1, precios.length);
        rest.forEach(itemRest => { 
            if ((itemRest - item) > ganancias) { 
                ganancias = itemRest - item;
            }
        })
    });
    
    return ganancias === 0 ? -1 : ganancias;
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
const pricesEth = [10, 20, 30, 40, 50, 60, 70];
const pricesDoge = [18, 15, 12, 11, 9, 7];
const pricesAda = [3, 3, 3, 3, 3];

console.log(maxProfit(pricesBtc));
console.log(maxProfit(pricesEth));
console.log(maxProfit(pricesDoge));
console.log(maxProfit(pricesAda));