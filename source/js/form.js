const INPUT_TEXT = /[a-zA-Zа-яёА-ЯЁ]$/;
const INPUT_TEL = /[0-9]$/;
const formInput = document.querySelectorAll('.form__input');

const checksValidityFormInput = (e) => {
  const element = e.target;
  if (element.type === 'text') {
    if (!INPUT_TEXT.test(element.value)){
      element.classList.add('form__input--error');
    }else {
      element.classList.remove('form__input--error');
    }
  }else {
    if (!INPUT_TEL.test(element.value)){
      element.classList.add('form__input--error');
    }else {
      element.classList.remove('form__input--error');
    }
  }
  if (element.value.length === 0) {
    element.classList.remove('form__input--error');
  }
};

formInput.forEach((el) => {
  el.addEventListener('input',checksValidityFormInput);
});
