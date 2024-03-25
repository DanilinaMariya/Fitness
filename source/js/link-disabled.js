const socialsLink = document.querySelectorAll('.socials__link');
const offersLink = document.querySelectorAll('.offers__link');

const isDisabled = (event) => {
  if (socialsLink.classList.contains('isDisabled')) {
    event.preventDefault();
  }
};

socialsLink.forEach((el) => {
  el.addEventListener('click',isDisabled);
});

offersLink.forEach((el) => {
  el.addEventListener('click',isDisabled);
});
