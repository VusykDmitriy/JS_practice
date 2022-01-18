"use strict";

// function showFirstMessage(text) {
//     console.log(text);
// }

// showFirstMessage('Hello World!');




function pow(x, n) {
  return x**n;
}

let x = prompt('x?', '');
let n = prompt('n?', '');

if (n >= 1) {
  alert( pow(x, n) );
} else {
  alert('Степень не поддерживается, используйте натуральное число');
}


