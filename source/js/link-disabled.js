const link = document.querySelectorAll('a');

link.forEach((el) => {
  if (el.classList.contains('is-disabled')) {
    el.preventDefault();
  }
});
