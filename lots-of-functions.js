
// ----- sayHi() -----
// Write a function called sayHi that takes in a name string and adds "Hi, " before the name. Return the newly modified string.
console.log("Challenge 1: 'sayHi()'");


function sayHi(name) {

    return "Hi " + name;
}

console.log(sayHi("Michael"));




// ----- bigString() -----
// Write a function called bigString that takes in 2 strings and returns which one is bigger. If the strings are equal in size, tell the user and prints both.
console.log("\n");
console.log("Challenge 2: 'bigString()'");


function bigString(string1, string2) {

    if (string1.length > string2.length) {

        return `${string1} is bigger than ${string2}!`;

    } else if (string1.length < string2.length) {

        return `${string2} is bigger than ${string1}!`;

    } else if (string1.length === string2.length) {

        return `${string1} and ${string2} are of equal length!`
    }
}

console.log(bigString("Luis","Lu"));
console.log(bigString("Luis","Michael"));
console.log(bigString("Michael","Michael"));




// ----- bigNumber() -----
// Write a function called bigNumber that takes in 2 numbers and returns which one is greater. If the numbers are equal tell the user.
console.log("\n");
console.log("Challenge 3: 'bigNumber()'");


function bigNumber(num1, num2) {

    if (num1 > num2) {

        return `${num1} is greater than ${num2}!`

    } else if (num1 < num2) {

        return `${num2} is greater than ${num1}!`

    } else if (num1 === num2) {

        return `${num1} and ${num2} are of equal value!`
    }
}

console.log(bigNumber(1, 0));
console.log(bigNumber(2, 1));
console.log(bigNumber(2, 2));




// ----- fiveMore() -----
// Write a function called fiveMore that takes in an array of numbers and adds 5 to each odd number then returns the updated array.
console.log("\n");
console.log("Challenge 4: 'fiveMore()'");


function fiveMore(numsArray) {
    
    for (let i = 0; i < numsArray.length; i++){

        if (numsArray[i] % 2 !== 0) {

            numsArray[i] += 5;
        }
    }
    return numsArray;
}

console.log(fiveMore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));




// ----- arraySummer() -----
// Write a function called arraySummer that takes in an array of numbers and adds each number in the array together. Return the total.
console.log("\n");
console.log("Challenge 5: 'arraySummer()'");


function arraySummer(array) {

    let sum = 0;

    for (i = 0; i < array.length; i++){

        sum += array[i];
    }
    return sum;
}

console.log(arraySummer([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));




// ----- everyDivisible() -----
// Write a function called everyDivisible that takes in a number n that is less than 10 and then prints every number less than or equal to 100 that is divisible by number n.
console.log("\n");
console.log("Challenge 6: 'everyDivisible()'");


function everyDivisible(n) {

    if (n < 10) {

        for (i = 1; i <= 100; i++) {

            if (i % n === 0) {

                console.log(i);
            }
        }
    } else {
        return `Error - Entry must be a number less than 10.`
    }
}

everyDivisible(7);