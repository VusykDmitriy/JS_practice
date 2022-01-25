"use strict";

                        //Объекты, деструктуризация объектов (ES6)

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};


// Деструктуризация объекта

const {border, bg} = options.colors;
console.log(bg);

// Метод Object.keys(options) возвращает в массив ключи объекта.
// метод length указывает на количество ключей

console.log(Object.keys(options).length);           

//удаляет из объекта свойство name

delete options.name;        



console.log(options);

for (let key in options) {                              
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key] [i]}`); 
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }  
}