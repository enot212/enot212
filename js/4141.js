function process() {
    try {
        console.log("начать работу");
        throw new Error("ошибка");
    } catch (e) {
        console.log("обработать ошибку");
        throw e;
    } finally {
        console.log("очистить рабочее пространство");
    }
}

process();
// Выведет:
// начать работу
// обработать ошибку
// очистить рабочее пространство
