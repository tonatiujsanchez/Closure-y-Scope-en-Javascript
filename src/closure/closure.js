// Ejemplo de uso de un Closure - Pedir pizza | Ejemplo JUANMEDIA
function pedirPizza( UID ){

    let numeroPedido = 0;
    const cliente = UID;

    return function( pizza ){
        numeroPedido++;
        return `PEDIDO(${numeroPedido}) - ${cliente} - ${ pizza } `
    }
}

const pedidoUID = pedirPizza( 5684 );
const pedidoUID1 = pedirPizza( 115684 );

console.log( pedidoUID( 'Peperoni' )  );
console.log( pedidoUID( 'Hawaiana' )  );
console.log( pedidoUID( 'Vegetales' )  );
console.log( pedidoUID( 'Pollo' )  );

console.log( pedidoUID1( 'Mexicana' )  );
console.log( pedidoUID1( 'Queso' )  );
console.log( pedidoUID1( 'Mixta' )  );


// Ejemplor Alcansia  GNDX
 
function moneyBox(){
    let saveCoins = 0;
    
    return function( coins ){
        saveCoins += coins;
        console.log( `Money box $${ saveCoins }` );
    }
}

const alcansia = moneyBox();
alcansia(5);
alcansia(10);
alcansia(20);
alcansia(7);
