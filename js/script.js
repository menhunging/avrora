$(document).ready(function () {

    MicroModal.init({
        openTrigger: 'data-custom-open',
        disableScroll: false,
        awaitCloseAnimation: true
    })

    if ($('.linkFancyBox').length > 0) {
        Fancybox.bind("[data-fancybox]", {
        });
    }

    if ($('.sliderMedia').length > 0) {

        let slider = $('.sliderMedia')

        slider.slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrow: true,
            prevArrow: "<button class='slide-arrow slick-prev'><span class='slide-text'>пред</span></button>",
            nextArrow: "<button class='slide-arrow slick-next'><span class='slide-text'>след</span></button>"
        });

    }

    if ($('.sliderLineUp').length > 0) {

        let slider = $('.sliderLineUp')

        slider.slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            arrow: true,
            prevArrow: "<button class='slide-arrow slick-prev'><span class='slide-text'>пред</span></button>",
            nextArrow: "<button class='slide-arrow slick-next'><span class='slide-text'>след</span></button>"
        });

    }

    if ($('.sliderProjects').length > 0) {

        let slider = $('.sliderProjects')

        slider.slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            arrow: true,
            prevArrow: "<button class='slide-arrow slick-prev'><span class='slide-text'>пред</span></button>",
            nextArrow: "<button class='slide-arrow slick-next'><span class='slide-text'>след</span></button>"
        });

    }

    if ($('.sliderNewPicture').length > 0) {

        let slider = $('.sliderNewPicture')

        slider.slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrow: true,
            prevArrow: "<button class='slide-arrow slick-prev'></button>",
            nextArrow: "<button class='slide-arrow slick-next'></button>"
        });

    }

    if ($('.sliderCertificate').length > 0) {

        let slider = $('.sliderCertificate')

        slider.slick({
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: true,
            arrow: true,
            prevArrow: "<button class='slide-arrow slick-prev'><span class='slide-text'>пред</span></button>",
            nextArrow: "<button class='slide-arrow slick-next'><span class='slide-text'>след</span></button>"
        });

    }

    if ($('.sliderPartner').length > 0) {

        let slider = $('.sliderPartner')

        slider.slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrow: true,
            prevArrow: "<button class='slide-arrow slick-prev'><span class='slide-text'>пред</span></button>",
            nextArrow: "<button class='slide-arrow slick-next'><span class='slide-text'>след</span></button>"
        });

    }

    if ($('.picList').length > 0) {

        let pictureBig = $('.picBig')
        let slider = $('.picList')
        let sliderItem = $('.picList .item')

        slider.slick({
            vertical: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrow: true,
            prevArrow: "<button class='slide-arrow slick-prev'></button>",
            nextArrow: "<button class='slide-arrow slick-next'></button>"
        });

        sliderItem.click(function () {
            slider.slick('slickGoTo', $(this).attr('data-slick-index'));
        })

        slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            let img = $('.picList .item[data-slick-index=' + nextSlide + '] img').attr('src')
            pictureBig.css('background-image', 'url(' + img + ')');
        });

    }

})

$(window).resize(function () {
    if ($('.steps').length > 0) {
        if ($(window).width() < 768) {

        }
    }
});
