let promise = new Promise(function(resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});

promise.then(alert); // 1

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

// Использование:
delay(3000).then(() => alert('выполнилось через 3 секунды'));

function showCircle(cx, cy, radius) {
    return new Promise(resolve => {
        let div = document.createElement('div');
        div.style.width = 0;
        div.style.height = 0;
        div.style.left = cx + 'px';
        div.style.top = cy + 'px';
        div.style.position = 'absolute';
        div.style.borderRadius = '50%';
        div.style.background = 'red';
        div.style.transition = 'width 1s ease, height 1s ease';

        document.body.appendChild(div);

        // Запускаем анимацию на следующий тик
        setTimeout(() => {
            div.style.width = radius * 2 + 'px';
            div.style.height = radius * 2 + 'px';
        }, 0);

        // Ждём окончания анимации
        div.addEventListener('transitionend', () => resolve(div), { once: true });
    });
}

// Использование:
showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
});
