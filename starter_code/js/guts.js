function divide(x,y) {
	return x / y;
}

console.assert(divide(1,1) === 1, "1/1 should equal 1");

function multiply(x,y) {
    return x * y;    
}

console.assert(multiply (1,1) === 1, "1*1 should equal 1");

// 3. subtract 
//    write a function named
//    "subtract" that takes in two
// parameters and returns
// their difference

function subtract(x,y) {
    return x - y;
}

console.assert(subtract (1,1) === 0, "1-1 should equal 0");

// 4. add
//    write a function named "add" that takes in two parameters and returns their sum

function add(x,y) {
    return x + y;   
}

console.assert(add (1,1) === 2, "1+1 should equal 2");

// 5. power
//    write a function named "power" that takes in two parameters and returns their result

function power(x,y) {
    return x ^ y;    
}

console.assert(power (1,1) === 1, "1^1 should equal 1");

// 6. square_root
//    write a function named "square_root" that takes in one parameter and returns their result

function square_root(x) {
    return x * x;
}

console.assert(square_root (1,1) === 1, "1*1 should equal 1");

// 7. logBase10
//    write a function named "logBase10" that takes in one parameter and returns their result

function logBase10 (x) {
    return x;
}

console.assert(logBase10 (1) === 1, "1 should equal 1");

// 8. generateRandomNumber
//    write a function named "generateRandomNumber" that takes in no parameters and returns a random number
 
function generateRandomNumber() {
    return Math.log;
}

console.assert(generateRandomNumber () === , "Blank should equal random");

// BONUS: write assertions to test whether your functions work!
// Here are some examples for divide(x,y), can you write more for the other functions?
//
// console.assert(divide(1,1) === 1, "1/1 should equal 1");
// console.assert(divide(1,2) === 0.5, "1/2 should equal 0.5");
