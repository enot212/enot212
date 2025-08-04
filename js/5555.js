let name = "John";

function sayHi() {
    alert("Hi, " + name);
}

name = "Pete";

sayHi(); // 👉 "Hi, Pete"

function makeWorker() {
    let name = "Pete";

    return function() {
        alert(name);
    };
}

let name = "John";
let work = makeWorker();
work(); // 👉 "Pete"

function makeCounter() {
    let count = 0;
    return function() {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter());  // 👉 0
alert(counter());  // 👉 1
alert(counter2()); // 👉 0
alert(counter2()); // 👉 1

function Counter() {
    let count = 0;

    this.up = function() {
        return ++count;
    };
    this.down = function() {
        return --count;
    };
}

let counter = new Counter();

alert(counter.up());   // 👉 1
alert(counter.up());   // 👉 2
alert(counter.down()); // 👉 1

"use strict";

let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        alert(`${phrase}, ${user}`);
    }
}

sayHi(); // ❌ Ошибка: sayHi is not defined

function sum(a) {
    return function(b) {
        return a + b;
    };
}

console.log(sum(1)(2));   // 👉 3
console.log(sum(5)(-1));  // 👉 4

let x = 1;

function func() {
    console.log(x); // ❌ ReferenceError
    let x = 2;
}

func();

function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    };
}

function inArray(arr) {
    return function(x) {
        return arr.includes(x);
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)));       // 👉 [3, 4, 5, 6]
console.log(arr.filter(inArray([1, 2, 10])));   // 👉 [1, 2]

function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

let users = [
    { name: "Иван", age: 20 },
    { name: "Пётр", age: 18 },
    { name: "Анна", age: 19 }
];

users.sort(byField("name")); // 👉 Анна, Иван, Пётр
users.sort(byField("age"));  // 👉 Пётр, Анна, Иван

function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function() {
            alert(i);
        };
        shooters.push(shooter);
    }

    return shooters;
}

let army = makeArmy();

army[0](); // 👉 0
army[1](); // 👉 1
army[2](); // 👉 2
