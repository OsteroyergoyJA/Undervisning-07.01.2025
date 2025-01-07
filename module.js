export function greet() {
  console.log('hello from module!');
}

// math

/*const a = 1;
const b = 2;*/

export const pi = 3.14;

export function add(a, b) {
  return a + b;
}

/* Standard export */

export default function multiply(a, b) {
  return a * b;
}
