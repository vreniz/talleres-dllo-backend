 function resolvedor(a, b, c, isPositive) {
    const discriminant = Math.sqrt(b * b - 4 * a * c);
    if (isPositive) {
        return (-b + discriminant) / (2 * a);
    } else {
        return (-b - discriminant) / (2 * a);
    }
}

// Example usage:
let result1 = resolvedor(1, 5, 4, true);  
let result2 = resolvedor(1, 5, 4, false); 

// Display results on the webpage
document.getElementById("result1").innerText = "Positive result: " + result1;
document.getElementById("result2").innerText = "Negative result: " + result2;
