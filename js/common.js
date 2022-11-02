const body = document.querySelector('body');
const main = document.querySelector('main');
const header = document.querySelector('header');
const LOGO = document.querySelector('#nav-logo');
const PAGI = document.querySelector('.pagination>.content');
const BANNER = document.querySelector('#banner');
const SHOWCASE = document.querySelector('#showcase');

var currentTop = 0;

window.addEventListener('scroll', () => {
  // console.log(body.scrollTop, currentTop, window.scrollY);
  if (window.scrollY < 830) {
    header.classList.remove('header-hide');
    header.classList.remove('header-show');
    LOGO.classList.remove('logo-hide');
    PAGI.classList.remove('pagination-span');
  } else if (window.scrollY > currentTop) {
    header.classList.remove('header-show');
    header.classList.add('header-hide');
    LOGO.classList.add('logo-hide');
    PAGI.classList.add('pagination-span');
  } else if (window.scrollY < currentTop) {
    header.classList.remove('header-hide');
    header.classList.add('header-show');
    LOGO.classList.remove('logo-hide');
    PAGI.classList.add('pagination-span');
  }
  currentTop = window.scrollY;
});

const TOTOP = document.querySelector('#back_to_top');
const FOOTER = document.querySelector('footer');

TOTOP.style = 'display: none;';

// console.log(window.innerHeight, window.scrollY, body.clientHeight, main.clientHeight, FOOTER.clientHeight);
window.addEventListener('scroll', () => {
  if (window.scrollY < window.innerHeight) {
    TOTOP.style = 'display: none;';
  } else if (window.scrollY < body.clientHeight - FOOTER.clientHeight - window.innerHeight) {
    TOTOP.style = 'position: fixed; right: 40px; bottom: 92px;';
  } else if (window.scrollY > body.clientHeight - FOOTER.clientHeight - window.innerHeight) {
    TOTOP.style = 'position: absolute; right: 40px; bottom: 92px;';
  }
});