// Filter and Sum Odd and Even NUmbers
const num = [11, 34, 44, 67, 96, 55];
const oddNum = num.filter( item => item % 2 !== 0);
const evenNUm = num.filter(item => item % 2 === 0);

console.log(oddNum, evenNUm);

const reduce = num.reduce( (a, b ) => a + b, 0);
console.log(reduce);



// Combine Two Arrays:
const arr1 = [0, 1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];

const combine = [...arr1, ...arr2];
console.log(combine);


// Flatten a Nested Array:
const nestedArray = [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]];
const newArray = nestedArray.flat();
console.log(newArray);


//  Show a use case of Splice:
const fruts = ['apple', 'banana', 'mango', 'papaya', 'jam', 'water-malon'];
fruts.splice(1, 2 , 'orange' );

console.log(fruts);


// USing Map:
const number = [1, 46, 66, 34, 89];
const sum = number.map(item => item + 2);

console.log(sum);


