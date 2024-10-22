// Подключение свайпера
import Swiper, {Navigation, Pagination, Keyboard, Autoplay} from 'swiper';

Swiper.use([Navigation, Pagination, Keyboard]);
const swiper4 = new Swiper(".reviews__swiper", {
  slidesPerView: 1,
  direction: 'horizontal',
  autoHeight: true,
  loop: true,
  keyboardControl: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-next-about',
    prevEl: '.swiper-prev-about',
  },
});


