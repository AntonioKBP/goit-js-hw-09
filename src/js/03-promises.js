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

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onSubmitClick);

function onSubmitClick(evt) {
  evt.preventDefault();
  formElements = evt.currentTarget.elements;
  delayValue = Number(formElements.delay.value) * 1000;
  stepValue = Number(formElements.step.value) * 1000;
  amountValue = Number(formElements.amount.value);

  for (let i = 1; i <= amountValue; i += 1) {
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayValue += stepValue;
  }
}
