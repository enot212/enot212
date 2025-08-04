// 1. Переписать функцию loadJson с async/await
// Исходный вариант с .then:
function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        });
}

loadJson('no-such-user.json')
    .catch(alert); // Error: 404
// С async/await:
async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error(response.status);
    }
}

loadJson('no-such-user.json').catch(alert);
// 2. Переписать demoGithubUser с async/await и циклом вместо рекурсии
// Исходник с рекурсией и .then/catch:
class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new HttpError(response);
            }
        });
}

function demoGithubUser() {
    let name = prompt("Введите логин?", "iliakan");

    return loadJson(`https://api.github.com/users/${name}`)
        .then(user => {
            alert(`Полное имя: ${user.name}.`);
            return user;
        })
        .catch(err => {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
                return demoGithubUser(); // рекурсия
            } else {
                throw err;
            }
        });
}

demoGithubUser();
// С async/await и циклом:
class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
}

async function demoGithubUser() {
    while (true) {
        let name = prompt("Введите логин?", "iliakan");

        try {
            let user = await loadJson(`https://api.github.com/users/${name}`);
            alert(`Полное имя: ${user.name}.`);
            return user; // выход из цикла и функции
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
                // цикл продолжится, запросим имя снова
            } else {
                throw err; // пробросим ошибку дальше
            }
        }
    }
}

demoGithubUser();
// 3. Вызвать async–функцию из обычной без await
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}

function f() {
    wait().then(result => {
        console.log(result); // 10
    });
}
