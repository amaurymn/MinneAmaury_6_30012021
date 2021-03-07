// SWIPER Carousel
const swiper = new Swiper('.swiper-container', {
    loop: true,
    lazy: true,
    mousewheel: true,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: true
    },
    breakpoints: {
        '@0.00': {
            slidesPerView: 1,

        },
        '@0.75': {
            slidesPerView: 2,
        },
        '@1.00': {
            slidesPerView: 3,
        },
        '@1.50': {
            slidesPerView: 4,
        },
    }
});
// --------------
$(".video-modal").click(function () {
    let modal = $(this).data("bs-target"),
        videoSrc = $(this).data("src"),
        videoSrcOpt = videoSrc + "?modestbranding=0&rel=0&controls=1&showinfo=0&html5=1&autoplay=1";

    $(modal + ' iframe').attr('src', videoSrcOpt);
    $(modal).on('hidden.bs.modal', function () {
        $(modal + ' iframe').attr('src', '');
    });
});
// --------------
$(".image-modal").click(function () {
    let modal = $(this).data("bs-target"),
        imgSrc = $(this).data("src"),
        imgAlt = $(this).data("alt");

    $(modal + ' img').attr('src', imgSrc).attr('alt', imgAlt);
    $(modal).on('hidden.bs.modal', function () {
        $(modal + ' img').attr('src', '').attr('alt', '');
    });
});