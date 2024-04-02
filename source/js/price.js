const priceButton = document.querySelectorAll('.price__button');
const priceList = document.querySelectorAll('.price__list');

const priceListSwitching = (id) => {
  priceList.forEach((el) => {
    el.classList.remove('price__list--activ');

    if (el.dataset.period === id) {
      el.classList.add('price__list--activ');
    }
  });
};

const priceButtonClassRemove = () => {
  priceButton.forEach((el) => {
    el.classList.remove('price__button--activ');
  });
};

const onPriceButtonClick = (evt) => {
  priceButtonClassRemove();

  const id = evt.target.dataset.period;
  evt.target.classList.add('price__button--activ');

  priceListSwitching(id);
};

priceButton.forEach((el) => {
  el.addEventListener('click', onPriceButtonClick);
});
