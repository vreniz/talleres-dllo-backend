function convertidorTemp(celsius) {
    return celsius * (9/5) + 32;
}

// Example usage:
let fahrenheit = convertidorTemp(23); // converts °C to Fahrenheit
document.getElementById("output").innerText = fahrenheit; // Displays the result
