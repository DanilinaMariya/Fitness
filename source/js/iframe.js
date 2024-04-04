const iframeWrapper = document.querySelector('.about__video');
const iframeButton = document.querySelector('.about__button-play');
const ifremeImage = document.querySelector('.about__video-img');

const createIframe = () => {
  const iframe = document.createElement('iframe');

  iframe.classList.add('about__iframe');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?si=lGEpj320IltrAJA2?rel=0&showinfo=0&autoplay=1');
  iframe.setAttribute('allowfullscreen', 'allowfullscreen');
  iframe.setAttribute('allow', 'autoplay');

  return iframe;
};

const oniframeButtonClick = () => {
  const iframe = createIframe();

  iframeButton.remove();
  ifremeImage.remove();
  iframeWrapper.querySelector('source').remove();

  iframeWrapper.appendChild(iframe);
};

if (iframeButton) {
  iframeButton.addEventListener('click', oniframeButtonClick);
}
