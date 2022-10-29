import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);

const startBtn = document.querySelector('button[data-start]');
const inputRef = document.querySelector('#datetime-picker');
const daysOutput = document.querySelector('span[data-days]');
const hoursOutput = document.querySelector('span[data-hours]');
const minsOutput = document.querySelector('span[data-minutes]');
const secsOutput = document.querySelector('span[data-seconds]');

let timerId;
// startBtn.setAttribute('disabled', '');
startBtn.addEventListener('click', startTimer);

function startTimer() {
  const startTime = Date.now();

  const timerId = setInterval(() => {
    console.log('check');
  }, 1000);
}

const timer = {};
