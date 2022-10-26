const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', startBackGroundChange);
stopBtn.addEventListener('click', stopBackGroundChange);

// const myInterval = setInterval(() => {}, 1000);

const myInterval = setInterval(startBackGroundChange, 1000);

function startBackGroundChange() {
  startBtn.setAttribute('disabled', '');
  document.body.style.backgroundColor = getRandomHexColor();
  //   setInterval(myInterval);
}

function stopBackGroundChange() {
  startBtn.removeAttribute('disabled', '');
  clearInterval(myInterval);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
