// Código del cuadrado
console.group("Cuadrados");
function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado ** 2;
}
console.groupEnd();

// Código del triángulo
console.group("Triángulos");
function perimetroTriangulo(lado1,lado2,base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base,altura) {
    return (base * altura) / 2;
}
console.groupEnd();

// Código del círculo
console.group("Círculos");
const pi = Math.PI;
function diametroCirculo(radio) {
    return radio * 2;
}
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return pi * diametro;
}
function areaCirculo(radio) {
    return pi * (radio ** 2);
}
console.groupEnd();

// Aquí interactuamos con el HTML

// Para el cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

// Para el triangulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("ladoTriangulo1");
    const input2 = document.getElementById("ladoTriangulo2");
    const input3 = document.getElementById("baseTriangulo");
    const valor1 = parseInt(input1.value);
    const valor2 = parseInt(input2.value);
    const valor3 = parseInt(input3.value);

    const perimetro = perimetroTriangulo(valor1,valor2,valor3);
    alert(perimetro)
}
function calcularAreaTriangulo() {
    const input1 = document.getElementById("baseTriangulo");
    const input2 = document.getElementById("alturaTriangulo");
    const valor1 = parseInt(input1.value);
    const valor2 = parseInt(input2.value);

    const area = areaTriangulo(valor1,valor2);
    alert(area)
}

// Para el círculo
function calcularPerimetroCirculo() {
    const input = document.getElementById("radioCirculo");
    const valor = input.value;

    const perimetro = perimetroCirculo(valor);
    alert(perimetro)
}
function calcularAreaCirculo() {
    const input = document.getElementById("radioCirculo");
    const valor = parseInt(input.value);

    const area = areaCirculo(valor);
    alert(area)
}
