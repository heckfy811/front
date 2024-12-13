function showMessage(message) {
    console.log(message);
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    } else {
        console.error(`Элемент с селектором "${selector}" не найден.`);
    }
}


function updateHeaderWithUTM() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const header = document.querySelector('h1');
    if (utmTerm && header) {
        header.textContent = utmTerm;
    }
}

function logCurrentTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit'});
    console.log(`Текущее время: ${time}`);
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

document.addEventListener("DOMContentLoaded", () => {
    showMessage("Скрипт загружен!");

    logCurrentTime();

    resetBackgroundColor();

    changeBackgroundColor("lightblue");

    toggleVisibility(".content");

    updateHeaderWithUTM();
});


