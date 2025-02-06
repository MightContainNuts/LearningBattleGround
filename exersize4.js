let numbers = [5, 2, 9, 1, 5, 6];

numbers.push(7); // Adds 7 to the end of the array
numbers.sort(); // Sorts the array in ascending order
console.log(numbers); // Outputs: [1, 2, 5, 5, 6, 7, 9]
console.log('-'.repeat(10));


let evenNumbers = numbers.filter(function(number) {
  return number % 2 == 0;
});
console.log(evenNumbers); // prints: [2, 6]
console.log('-'.repeat(10));

let evenNumbers_arrow = numbers.filter(number => number % 2 == 0);
console.log(evenNumbers_arrow); // prints: [2, 6]
console.log('-'.repeat(10));


randomArray = [1234,234,245,45,3445,34,76,67,678,6,8,79,90,8];

let total = randomArray.reduce((acc, curr) => acc + curr, 0);
console.log(total); // prints: 5616
console.log('-'.repeat(10));
let max = randomArray.reduce((acc, curr) => Math.max(acc, curr), 0);
console.log(max)
console.log('-'.repeat(10));

let min = randomArray.reduce((acc, curr) => Math.min(acc, curr));
console.log(min)
console.log('-'.repeat(10));

let onlyEven = randomArray.filter(number => number % 2 == 0);
console.log(onlyEven)
console.log('-'.repeat(10));
