//Punto 1

function desglosarString(cadena, tipo) {

    const vocales = "aeiouAEIOU";

    if (tipo === "vocales") {
        return [...cadena].filter(caracter => vocales.includes(caracter)).length;
    } else if (tipo === "consonantes") {
        return [...cadena].filter(caracter => /[a-zA-Z]/.test(caracter) && !vocales.includes(caracter)).length;
    }

    return 0;
}

// Ejemplo:
console.log(desglosarString("murcielagos", "vocales"));      // 5
console.log(desglosarString("murcielagos", "consonantes"));  // 6


//Punto 2
function twoSum(nums, target, index = 0, mapa = {}) {
 
    if (index >= nums.length) {
        return [];
    }

    let complemento = target - nums[index];

    if (mapa[complemento] !== undefined) {
        return [mapa[complemento], index];
    }

    mapa[nums[index]] = index;

    return twoSum(nums, target, index + 1, mapa);
}

// Ejemplo:
console.log(twoSum([2, 2, 7, 15], 4));  
console.log(twoSum([3, 4, 2], 6));       

// Punto 3

function conversionRomana(romano, index = romano.length - 1, total = 0, anterior = 0) {
    
    const valoresRoman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    
    if (index < 0) {
        return total;
    }

    
    let valorAct = valoresRoman[romano[index]];

    
    if (valorAct < anterior) {
        total -= valorAct;
    } else {
        total += valorAct;
    }

    
    return conversionRomana(romano, index - 1, total, valorAct);
}

// Ejemplos:

console.log(conversionRomana("III"));          
console.log(conversionRomana("XIV"));      
console.log(conversionRomana("MMXXIV"));   
console.log(conversionRomana("MXMVII"));  
