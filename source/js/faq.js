const faqBox = document.querySelectorAll('.faq__box');
const faqButton = document.querySelectorAll('.faq__button');
const faqContent = document.querySelectorAll('.faq__content');

const boxeDefault = () => {
  const content = document.querySelectorAll('.faq__content--open');

  content.forEach((el) => {
    const currentContent = el.querySelector('.faq__hidden');
    currentContent.style.height = `${currentContent.scrollHeight}px`;
  });
};

const boxHandler = (el) => {
  const currentBox = el;
  const currentButton = el.querySelector('.faq__control');
  const currentContent = el.querySelector('.faq__hidden');

  if (currentBox.classList.contains('faq__content--open')) {
    currentButton.classList.remove('faq__control--activ');
    currentBox.classList.remove('faq__content--open');
    currentContent.style.height = null;
  }else {
    currentButton.classList.add('faq__control--activ');
    currentBox.classList.add('faq__content--open');
    currentContent.style.height = `${currentContent.scrollHeight}px`;
  }
};

const onFaqButtonClick = (el) => {
  faqButton.forEach((e) => {
    e.classList.remove('faq__button--activ');
  });

  el.classList.add('faq__button--activ');

  faqBox.forEach((e) => {
    if (e.dataset.chapter === el.dataset.chapter) {
      e.classList.add('faq__box--activ');
    }else {
      e.classList.remove('faq__box--activ');
    }
  });

  boxeDefault();
};

faqContent.forEach((el) => {
  el.addEventListener('click', () => boxHandler(el));
});

faqButton.forEach((el) => {
  el.addEventListener('click', () => onFaqButtonClick(el));
});

boxeDefault();
