import { add, sub } from './math.js';

function sayHello(name) {
    console.log(`Hello ${name}!`);
}

// sayHello("Shravan");

// console.log(window);

console.log(sayHello('Shravan'));

console.log('Add', add(1, 3))
console.log('Sub', sub(1, 3))