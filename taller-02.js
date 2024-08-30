//Punto 1 
function findMax(numbers) {
   let max = numbers[0];
      for (let i = 1; i < numbers.length; i++) {
        
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    
    return max;
}

// Ejemplo:
console.log(findMax([3, 17, -1, 4, -19])); 


//Punto 2
function includes(numbers, target) {
   
    for (let i = 0; i < numbers.length; i++) {
       
        if (numbers[i] === target) {
            return true;  
        }
    }
    return false;  
}

// // Ejemplo:
console.log(includes([3, 17, -1, 4, -19], 2));  
console.log(includes([3, 17, -1, 4, -19], 4)); 


//Punto 3
function sum(numbers) {
    let total = 0;
    for (let num of numbers) total += num;
    return total;
}
// Ejemplo:
console.log(sum([3, 17, -1, 4, -19])); 


//Punto 4 
function missingNumbers(numbers) {
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let missing = [];

    for (let i = min; i <= max; i++) {
        if (!numbers.includes(i)) {
            missing.push(i);
        }
    }

    return missing;
}

// Ejemplo:
console.log(missingNumbers([7, 1, 4, 6, 3, 9]));
