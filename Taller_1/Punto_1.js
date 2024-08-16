function convertidorTemp(celsius) {
    return celsius * (9/5) + 32;
}


let fahrenheit = convertidorTemp(23); 
document.getElementById("output").innerText = fahrenheit; // Display
