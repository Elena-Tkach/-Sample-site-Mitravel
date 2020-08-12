const playBtnFirst = document.querySelectorAll('.js-btn__play');

playBtnFirst.forEach((el) => {
    el.addEventListener('click', (e) => {
        let video = e.currentTarget.closest('.main-video').querySelector('video');
        video.play();
        e.currentTarget.style.display = 'none';
        setTimeout(() => {
            video.volume = 0.5;
        }, 1000);
    })
})


