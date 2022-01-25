'use strict';

                        //Передача по ссылке или по значению, Spread оператор (ES6-ES9)

let a =5,
    b = a;

b = b + 5;

console.log(b);         //Примитивные типы данных передаются по значению
console.log(a);


        //Объекты (массивы, функции и тд.) передаются по ссылке 

const obj = {
    a: 5,
    b: 1
};

const copy = obj;  //Ссылка на obj

copy.a = 10; 

console.log(copy);
console.log(obj);

                                    // Существует глубокое и поверхностное копирование объектов

                                    //  Поверхностное копирование объектов

            //1-ый способ

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}
                                        
const numbers = {                               
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

            // 2

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));  // Метод Object.assign() копирует значения объекта


            // 3

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();  // Метод slice() копирует значения массива

newArray[1] = 'slice';
console.log(newArray);
console.log(oldArray);
            

            // 4

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];  // оператор расширения spread '...' копирует значения объекта

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

console.log(...num);    // '...' передает значения из массива в функцию

const array = ['a', 'b'];
const newAarray = [...array];   // копирует массив

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};  // копирует объект