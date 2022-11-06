import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
let delayValue;
let stepValue;
let amountValue;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

function onSubmitClick(evt) {
  evt.preventDefault();

  delayValue = Number(evt.currentTarget.elements.delay.value);
  stepValue = Number(evt.currentTarget.elements.step.value);
  amountValue = Number(evt.currentTarget.elements.amount.value);

  for (let i = 1; i <= amountValue; i += 1) {
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delayValue += stepValue;
  }
}

formRef.addEventListener('submit', onSubmitClick);
