"use strict";

let arr = [1, 2, 3, 6, 8];

arr.pop();          // удаляет последний элемент из конца массива
arr.push(10);       // добавляет элемент в конец массива


let arr = [1, 12, 23, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {     // сортировка чисел по возрастанию
    return a - b;
}



arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

    