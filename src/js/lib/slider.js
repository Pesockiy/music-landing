import Swiper, { Pagination, Navigation, Autoplay } from "swiper";

Swiper.use([Navigation, Pagination, Autoplay]);

document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('.category-slider')) {
        const topSlider = new Swiper('.category-slider', {
            slideActiveClass: 'is-active',
            autoplay: {
                delay: 2000
            },
            spaceBetween: 20,
            centeredSlides: true,
            loop: true,
            breakpoints: {
                540: {
                    slidesPerView: 1
                },
                760: {
                    slidesPerView: 3
                },
                960: {
                    slidesPerView: 4
                },
                1280: {
                    slidesPerView: 5,
                    spaceBetween: 30
                }
            }
        });
    };
    if (document.querySelector('.comments-slider')) {
        const topSlider = new Swiper('.comments-slider', {
            spaceBetween: 1,
            slideActiveClass: 'is-active',
            autoplay: {
                delay: 3000
            },
            loop: true,
            centeredSlides: true,
            breakpoints: {
                760: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                960: {
                    slidesPerView: 2.5,
                    spaceBetween: 20
                }
            }

        });
    };
    if (document.querySelector('.blogs-slider')) {
        const topSlider = new Swiper('.blogs-slider', {
            slideActiveClass: 'is-active',
            slidePrevClass: 'is-active',
            slideNextClass: 'is-active',
            navigation: {
                prevEl: '.slider__prev',
                nextEl: '.slider__next',
            },
            autoplay: {
                delay: 2500
            },
            spaceBetween: 20,
            centeredSlides: true,
            loop: true,
            breakpoints: {
                540: {
                    slidesPerView: 1
                },
                760: {
                    slidesPerView: 3
                },
                960: {
                    slidesPerView: 4
                },
                1280: {
                    slidesPerView: 4.9,
                    spaceBetween: 30
                }
            }
        });
    };
});


