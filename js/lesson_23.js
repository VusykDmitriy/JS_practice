'use string';

                         //Основы ООП, прототипно-ориентированное наследование


const soldier = {
    health: 100,
    armor: 100
};

const jonh = Object.create(soldier);

// const jonh = {
//     health: 100
// };

jonh.__proto__ = soldier;       // __proto__ устаревшее свойство. На данный момент не используется

console.log(jonh.armor);


Object.create(proto[, descriptors])  //создаёт пустой объект со свойством [[Prototype]], указанным как proto (может быть null), и необязательными дескрипторами свойств.

Object.getPrototypeOf(obj)  // возвращает свойство [[Prototype]] объекта obj (то же самое, что и геттер __proto__).

Object.setPrototypeOf(obj, proto) // устанавливает свойство [[Prototype]] объекта obj как proto (то же самое, что и сеттер __proto__).