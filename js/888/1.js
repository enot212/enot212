//1. Будет ли работать функция иначе, если убрать else?
   // Исходный вариант:
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}
// Вариант без else:
function checkAge(age) {
    if (age > 18) {
        return true;
    }
    return confirm('Родители разрешили?');
}
// поведение функции не изменится
//2. Переписать функцию в одну строку
function checkAge(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}
 3. function checkAge(age) {
   return age > 18 || confirm('Родители разрешили?');
 }

 // Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

//Вариант решения с использованием if:

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
//Вариант решения с оператором ?:

    function min(a, b) {
        return a < b ? a : b;
    }