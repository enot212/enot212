// Задача: Функция printNumbers(from, to), выводящая числа каждую секунду
// Вариант 1: с использованием setInterval
function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(() => {
        alert(current);
        if (current === to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}
 // Вариант 2: с использованием рекурсивного setTimeout
function printNumbers(from, to) {
    let current = from;

    function go() {
        alert(current);
        if (current < to) {
            current++;
            setTimeout(go, 1000);
        }
    }

    go();
}
