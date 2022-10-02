import { Carousel } from '@fancyapps/ui'
import  {Fancybox}  from "@fancyapps/ui/src/Fancybox/Fancybox.js";

const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
    Dots: false,

});

const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
    Sync: {
        target: mainCarousel,
        friction: 0,
    },
    Dots: false,
    Navigation: false,
    center: true,
    slidesPerPage: 1,
    infinite: false,
});

Fancybox.bind('[data-fancybox="gallery"]', {
    Carousel: {
        on: {
            change: (that) => {
                mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
                    friction: 0,
                });
            },
        },
    },
});








