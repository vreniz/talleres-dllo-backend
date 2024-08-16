function mejorParidad(numero) {
    return numero % 2 === 0;
}

let numero = 4;
let resultText;

if (mejorParidad(numero)) {
    resultText = numero + " es par ";
} else {
    resultText = numero + " es impar";
}

document.getElementById("output").innerText = resultText;
