const mySiema = new Siema({
    selector: '.js-slider',
    perPage: {

        768: 1,
        993: 2,
        1024: 2,
        1201: 3,
        1300: 3,
    },

    loop: true,
    threshold: 20,
});


const siema = new Siema({
    selector: '.js-slid',
    perPage: 1,

    loop: true,
    threshold: 20,
});

const prev = document.querySelector('.js-prev');
const next = document.querySelector('.js-next');

prev.addEventListener('click', () => siema.prev());
next.addEventListener('click', () => siema.next());
