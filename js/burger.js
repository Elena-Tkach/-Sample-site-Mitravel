const burger = document.querySelector('.js-burger');
const close = document.querySelector('.js-menu__close');
const menu = document.querySelector('.js-menu');


burger.addEventListener('click', () => {
    menu.classList.add('menu-visible');
})

close.addEventListener('click', () => {
    menu.classList.remove('menu-visible');
})