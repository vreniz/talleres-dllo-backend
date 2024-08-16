function peorParidad(numero) {
    if (numero === 1) return false;
    if (numero === 2) return true;
    if (numero === 3) return false;
    if (numero === 4) return true;
    if (numero === 5) return false;
    if (numero === 6) return true;
    if (numero === 7) return false;
    if (numero === 8) return true;
    if (numero === 9) return false;
    if (numero === 10) return true;

    
    return false;
}

// Ejemplo 
let outputText = '';
for (let i = 1; i <= 10; i++) {
    outputText += i + " es " + (peorParidad(i) ? "par" : "impar") + "<br>";
}

// Display 
document.getElementById("output").innerHTML = outputText;
