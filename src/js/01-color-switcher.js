const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
// console.log(body);
let timerId = null;

body.addEventListener('click', onStartBtn);
body.addEventListener('click', onStopBtn);

function onStopBtn(e) {
  if (e.target.dataset === stopBtn.dataset) {
      startBtn.disabled = false;
      clearInterval(timerId);
  }
}

function onStartBtn(e) {
  if (e.target.dataset === startBtn.dataset) {
    timerId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.disabled = true;
    body.style.backgroundColor = getRandomHexColor();
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


