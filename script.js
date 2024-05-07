// script.js
const hrElement = document.getElementById('hr');
const minElement = document.getElementById('min');
const secElement = document.getElementById('sec');
const countElement = document.getElementById('count');

let totalMilliseconds = 0;
let timer;

function updateDisplay() {
    const hours = Math.floor(totalMilliseconds / 3600000);
    const minutes = Math.floor((totalMilliseconds % 3600000) / 60000);
    const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
    const milliseconds = totalMilliseconds % 1000;

    hrElement.textContent = hours.toString().padStart(2, '0');
    minElement.textContent = minutes.toString().padStart(2, '0');
    secElement.textContent = seconds.toString().padStart(2, '0');
    countElement.textContent = milliseconds.toString().padStart(2, '0');
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        totalMilliseconds += 10;
        updateDisplay();
    }, 10);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    totalMilliseconds = 0;
    updateDisplay();
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);