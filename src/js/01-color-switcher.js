const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', startBackGroundChange);
stopBtn.addEventListener('click', stopBackGroundChange);
const delay = 1000;
let myInterval;
stopBtn.setAttribute('disabled', '');

function startBackGroundChange() {
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled', '');
  myInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, delay);
}

function stopBackGroundChange() {
  startBtn.removeAttribute('disabled', '');
  stopBtn.setAttribute('disabled', '');
  clearInterval(myInterval);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
