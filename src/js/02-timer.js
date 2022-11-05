import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start]');
const inputRef = document.querySelector('#datetime-picker');
const daysOutput = document.querySelector('span[data-days]');
const hoursOutput = document.querySelector('span[data-hours]');
const minsOutput = document.querySelector('span[data-minutes]');
const secsOutput = document.querySelector('span[data-seconds]');
let timerId;
let deadLine = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = new Date();
    if (selectedDates[0] <= date) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      Notiflix.Notify.success('Push Start to countdown');

      startBtn.removeAttribute('disabled', '');
      deadLine = selectedDates[0];
      // console.log(deadLine);
    }
  },
};

flatpickr('#datetime-picker', options);

startBtn.setAttribute('disabled', '');
startBtn.addEventListener('click', startTimer);

function startTimer() {
  // console.log(time);
  const timerId = setInterval(() => {
    const startTime = Date.now();
    const difference = deadLine - startTime;
    const time = convertMs(difference);

    if (difference <= 0) {
      clearInterval(timerId);
    } else {
      renderTime(time);
    }
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function renderTime(time) {
  daysOutput.textContent = time.days;
  hoursOutput.textContent = time.hours;
  minsOutput.textContent = time.minutes;
  secsOutput.textContent = time.seconds;
}
