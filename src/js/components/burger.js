const menu = document.querySelector('.burger');
const headerClose = document.querySelector('.header__close');
const body = document.querySelector('.page__body');

if (menu) {
  menu.addEventListener('click', () => {
    document.querySelector('#menu').classList.toggle('active');
    document.querySelector('body').classList.add('stop-scrolling');
  });
}

if (headerClose) {
  headerClose.addEventListener('click', () => {
    document.querySelector('#menu').classList.remove('active');
    document.querySelector('body').classList.remove('stop-scrolling');
  });
}

if (body){
  body.addEventListener('click', (e) => {
    if (e.target.classList.contains('page__body')) {
      document.querySelector('#menu').classList.remove('active');
      document.querySelector('body').classList.remove('stop-scrolling');
    }
  });
}
