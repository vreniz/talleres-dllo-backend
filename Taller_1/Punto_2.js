 function resolvedor(a, b, c, isPositive) {
    const discriminant = Math.sqrt(b * b - 4 * a * c);
    if (isPositive) {
        return (-b + discriminant) / (2 * a);
    } else {
        return (-b - discriminant) / (2 * a);
    }
}


let result1 = resolvedor(1, 5, 4, true);  
let result2 = resolvedor(1, 5, 4, false); 

// Display 
document.getElementById("result1").innerText = "Resultado Positivo: " + result1;
document.getElementById("result2").innerText = "Resultado Negativo: " + result2;
