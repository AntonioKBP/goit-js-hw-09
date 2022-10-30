import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('button[data-start]');
const inputRef = document.querySelector('#datetime-picker');
const daysOutput = document.querySelector('span[data-days]');
const hoursOutput = document.querySelector('span[data-hours]');
const minsOutput = document.querySelector('span[data-minutes]');
const secsOutput = document.querySelector('span[data-seconds]');
let timerId;
let currentData = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = new Date();
    if (selectedDates[0] <= date) {
      alert('Please choose a date in the future');
      //   window.alert('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled', '');
      currentData = selectedDates[0];
    }
  },
};

console.log(currentData);

flatpickr('#datetime-picker', options);

startBtn.setAttribute('disabled', '');
startBtn.addEventListener('click', startTimer);

function startTimer() {
  const startTime = Date.now();

  const timerId = setInterval(() => {
    console.log('check');
  }, 1000);
}

const timer = {
  start() {
    const startTime = Date.now();
  },
};
timer.start();

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
