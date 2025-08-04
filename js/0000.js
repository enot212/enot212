// Исправление ошибки в классе Rabbit
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name) {
        super(name); // вызываем конструктор родителя!
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("Белый кролик");
alert(rabbit.name); // "Белый кролик"
 // Класс ExtendedClock с параметром precision
// extended-clock.js

class ExtendedClock extends Clock {
    constructor(options) {
        super(options);
        this.precision = options.precision || 1000;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}
