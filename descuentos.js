/*function calcularPrecioConDescuento(precio,descuento) {
    const porcentajePrecioConDescuento = 100 -  descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}*/
function calcularPrecioConDescuentoCupon(precio,descuento,cupon) {
    const porcentajePrecioConDescuento = 100 -  descuento;
    const porcentajePrecioConCupon = 100 - cupon;
    var precioConDescuento;
    if (cupon != 0) {
        precioConDescuento = (precio * porcentajePrecioConDescuento * porcentajePrecioConCupon) / 10000;
    } else {
        precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    }
    
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const inputCupon = document.getElementById("InputCupon");
    const resultP = document.getElementById("ResultP");
    
    const priceValue = inputPrice.value;
    const discountValue = inputDiscount.value;
    const cuponValue = inputCupon.value;

    const precioConDescuento = calcularPrecioConDescuentoCupon(priceValue,discountValue,cuponValue);
    
    if(cuponValue != 0) {
        resultP.innerText = `El precio con descuento más el cupón es de $${precioConDescuento}.`;
    } else {
        resultP.innerText = `El precio con descuento es de $${precioConDescuento}.`;
    }
    
} 