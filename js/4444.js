// . Сумма чисел sumTo(n)
// Вариант 1: цикл
function sumToLoop(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += i;
    return sum;
}

// Вариант 2: рекурсия
function sumToRec(n) {
    return n === 1 ? 1 : n + sumToRec(n - 1);
}

// Вариант 3: формула арифметической прогрессии
function sumToMath(n) {
    return n * (n + 1) / 2;
}

console.log(sumToLoop(100));  // 5050
console.log(sumToRec(100));   // 5050
console.log(sumToMath(100));  // 5050


function factorial(n) {
    return n === 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(5)); // 120

function fib(n) {
    let a = 1, b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib(3));  // 2
console.log(fib(7));  // 13
console.log(fib(77)); // 5527939700884757

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// Вариант 1: цикл
function printListIter(list) {
    let current = list;
    while (current) {
        console.log(current.value);
        current = current.next;
    }
}

// Вариант 2: рекурсия
function printListRec(list) {
    console.log(list.value);
    if (list.next) printListRec(list.next);
}

printListIter(list); // 1 2 3 4
printListRec(list);  // 1 2 3 4

// Вариант 1: рекурсия
function printReverseRec(list) {
    if (list.next) printReverseRec(list.next);
    console.log(list.value);
}

// Вариант 2: цикл с массивом
function printReverseIter(list) {
    let arr = [];
    let current = list;
    while (current) {
        arr.push(current.value);
        current = current.next;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

printReverseRec(list); // 4 3 2 1
printReverseIter(list); // 4 3 2 1
