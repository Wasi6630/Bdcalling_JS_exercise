// Filtr Odd Number:
const num = [14, 34, 65, 62, 85, 55, 88];

const oddNum = num.filter(item => item % 2 !== 0);
console.log(oddNum);

const evenNum = num.filter(x => x % 2 === 0);
console.log(evenNum);


// Array of Square:
const square = [2, 4, 1, 5, 7,];

const newSquare = square.map( item => item * item);
console.log(newSquare);


// Find Largest Number Using Reduce:

const largest = num.reduce( (a, b) => (a > b ? a : b));
console.log(largest);


// Combine two  arrays using Spread:
 const combine = [...num, ...square];
 console.log(combine);

 
//  Destructure the first and last values:
const [frist] = num;
const [last] = num.slice(-1);

console.log("Frist Number: ", frist);
console.log("Last Number: ", last);


const [fst, , , , lst] = square;
console.log("Frist Number: ", fst);
console.log("Last Number: ", lst);


// Flatten a nested Array:
const nsd = [ [0, 2, 4, 6, 8], [1, 3, 5, 7, 9]];
const ftd = nsd.flat();

console.log(ftd);

 

// Score Tracer:
let score = [14, 34, 65, 62, 85, 55, 88];
let total = score.reduce((a, b) => a + b, 0);

let avg = total / score.length;
console.log("Avarage number is: ", avg);




























