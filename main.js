import './scss/styles.scss'

const mainNav = document.querySelector('.main-nav');

const menuToggle = document.querySelector('.menu-toggle');

const menuBtn = document.querySelector('.menu-toggle img')

const body = document.querySelector('body');

const html = document.querySelector('html');


const toggleNav = e => {
    mainNav.classList.toggle('active');

    if(mainNav.classList.contains('active')) {
         menuBtn.src = './images/icon-close.svg';
         html.style.overflowY = 'hidden';
         body.style.overflowY = 'hidden';
    } else {
        menuBtn.src = './images/icon-hamburger.svg'
         html.style.overflowY = 'auto';
         body.style.overflowY = 'auto';
    }
}


menuToggle.addEventListener('click', toggleNav);