new Promise(function(resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(alert);
// выполнится ли .catch(alert)?
// Ответ: Нет, .catch не выполнится в этом примере.
//Ошибка "Whoops!" выбрасывается внутри setTimeout.
//В setTimeout функция вызывается асинхронно, и её ошибка не связана напрямую с промисом.
//Промис в конструкторе не знает об этой ошибке, потому что throw происходит внутри колбэка setTimeout, уже после создания промиса.
//В итоге промис остаётся в состоянии pending (ни resolved, ни rejected), т.к. мы нигде не вызвали reject.