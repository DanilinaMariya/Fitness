import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const reviewsSlide = document.querySelectorAll('.slider__slide');
const reviewsButton = document.querySelectorAll('.slider__button');

// reviews
new Swiper('.reviews__slider', {
  modules: [Navigation],

  loop: false,

  slidesPerView: 1,
  speed: 500,
  autoHeight: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1366: {
      simulateTouch: false
    }
  }
});

const reviewsButtonDisabled = () => {
  if (reviewsSlide[0].classList.contains('swiper-slide-active')) {
    reviewsButton[0].setAttribute('disabled', '');
  }else {
    reviewsButton[0].removeAttribute('disabled');

    if(reviewsButton[reviewsButton.length - 1].classList.contains('swiper-slide-active')) {
      reviewsButton[1].setAttribute('disabled', '');
    }else {
      reviewsButton[1].removeAttribute('disabled');
    }
  }
};

// juri

new Swiper('.juri__slider', {
  modules: [Navigation],

  loop: true,
  speed: 500,
  autoHeight: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
      initialSlide: 2
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
      simulateTouch: false
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

reviewsButton.forEach((el) => {
  reviewsButtonDisabled();
  el.addEventListener('click', reviewsButtonDisabled);
});
