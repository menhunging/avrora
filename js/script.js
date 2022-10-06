$(document).ready(function () {

    MicroModal.init({
        openTrigger: 'data-custom-open',
        disableScroll: false,
        awaitCloseAnimation: true
    })

    if ($(".header").length) {
        let header = $('.header');

        if ($(window).scrollTop() > 1) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }

        $(window).scroll(function () {
            if ($(window).scrollTop() > 1) {
                header.addClass('fixed');
            } else {
                header.removeClass('fixed');
            }
        });
    }

    if ($(".menuBurger").length) {
        $(".menuBurger").on("click", function () {
            $(".menuBurger").toggleClass("open")
            $(".menu").toggleClass("open")
        })
    }

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
            nextArrow: "<button class='slide-arrow slick-next'><span class='slide-text'>след</span></button>",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
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
            nextArrow: "<button class='slide-arrow slick-next'><span class='slide-text'>след</span></button>",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]

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
            nextArrow: "<button class='slide-arrow slick-next'><span class='slide-text'>след</span></button>",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
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
        let pictureBigInvis = $('.picBig .linkFancyBox')
        let slider = $('.picList')
        let sliderItem = $('.picList .item')

        slider.slick({
            vertical: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrow: true,
            prevArrow: "<button class='slide-arrow slick-prev'></button>",
            nextArrow: "<button class='slide-arrow slick-next'></button>",
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        vertical: false,
                    }
                },
            ]
        });

        sliderItem.click(function () {
            slider.slick('slickGoTo', $(this).attr('data-slick-index'));
            pictureBigInvis.attr('href', img)
        })

        slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            let img = $('.picList .item[data-slick-index=' + nextSlide + '] img').attr('src')
            pictureBig.css('background-image', 'url(' + img + ')');
            pictureBigInvis.attr('href', img)
        });

    }

    if ($('.becomePartner').length > 0) {
        $("#phoneInput").inputmask({
            mask: "+7(999) 999-99-99",
            placeholder: "*",
            clearIncomplete: true
        });
        $("#emailInput").inputmask({
            mask: "*{3,20}@*{3,20}.*{3,20}",
            clearIncomplete: true
        });
    }
})