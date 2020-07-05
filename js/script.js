var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: 'true'
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: 'false'
    },
    breakpoints: {
        506: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        668: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        998: {
            slidesPerView: 4,
            spaceBetween: 50,
        }
    }
});

AOS.init({
    duration:2000
});