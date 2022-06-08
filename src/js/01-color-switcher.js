const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timerId = null;

body.addEventListener('click', onClickBtn);

function onClickBtn(e) {
  onStartButton(e);
  onStopButton(e);
}

function onStartButton(e) {
  if (e.target.hasAttribute('data-start')) {
    timerId = setInterval(() => {
      backgroundColorStyle();
    }, 1000);
    startBtn.disabled = true;
    backgroundColorStyle();
  }
}

function onStopButton(e) {
  if (e.target.hasAttribute('data-stop')) {
    startBtn.disabled = false;
    clearInterval(timerId);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function backgroundColorStyle() {
  body.style.backgroundColor = getRandomHexColor();
}
