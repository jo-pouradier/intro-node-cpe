import { argv } from 'node:process';

/**
 * This function takes in a list of numbers as arguments and returns the sum of all the numbers.
 * It accepts all base 10 digits and exadecimal digits.
 */

let sum = 0;
for (let i = 2; i < argv.length; i++) {
    let digit = Number(argv[i]);
    if (!isNaN(digit) && typeof digit === 'number') {
        sum += digit;
    }
}
console.log(sum);

sum = argv.filter(elem => !isNaN(Number(elem)))
    .reduce((acc, curr) => acc + Number(curr), 0);
console.log(sum);