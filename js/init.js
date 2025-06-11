$('.main_slider').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 700,
  slidesToShow: 1,
  adaptiveHeight: false,
  autoplay: false,
});
$('.franchise_slider').slick({
  dots: false,
  infinite: true,
  prevArrow: $('.franchise_slider_nav_prev'),
  nextArrow: $('.franchise_slider_nav_next'),
  speed: 700,
  slidesToShow: 3,
  adaptiveHeight: false,
  autoplay: false,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      }

    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
      }

    }

  ]
});


$('.uniqueness_box_mobile').slick({
  dots: false,
  infinite: true,
  prevArrow: $('.uniqueness_slider_nav_prev'),
  nextArrow: $('.uniqueness_slider_nav_next'),
  speed: 700,
  slidesToShow: 1,
  adaptiveHeight: false,
  autoplay: false,
});


$('.credit_box').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 700,
  slidesToShow: 4,
  adaptiveHeight: false,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 3,
      }

    },
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 2,
      }

    },
    {
      breakpoint: 710,
      settings: {
        slidesToShow: 1,
      }

    }

  ]
});


$('.stages_box_item_slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 700,
  slidesToShow: 1,
  adaptiveHeight: false,
  autoplay: false,
});
$('.options_box_mobile').slick({
  dots: false,
  infinite: true,
  prevArrow: $('.options_slider_nav_prev'),
  nextArrow: $('.options_slider_nav_next'),
  speed: 700,
  slidesToShow: 2,
  adaptiveHeight: false,
  autoplay: false,
  responsive: [
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 1,
      }

    }
  ]
});

$('.projects_box_mobile').slick({
  dots: false,
  infinite: true,
  prevArrow: $('.projects_slider_nav_prev'),
  nextArrow: $('.projects_slider_nav_next'),
  speed: 700,
  slidesToShow: 2,
  adaptiveHeight: false,
  autoplay: false,
  responsive: [
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 1,
      }

    }
  ]
});


$('.hit_box_mobile').slick({
  dots: false,
  infinite: true,
  prevArrow: $('.hit_slider_nav_prev'),
  nextArrow: $('.hit_slider_nav_next'),
  speed: 700,
  slidesToShow: 2,
  adaptiveHeight: false,
  autoplay: false,
  responsive: [
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 1,
      }

    }
  ]
});

$('.series_box_mobile').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 700,
  slidesToShow: 1,
  adaptiveHeight: false,
  autoplay: false,
});

$('.video_slider').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 700,
  slidesToShow: 3,
  adaptiveHeight: false,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 2,
      }

    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      }

    }

  ]
});


$('.reviews_slider').slick({
  dots: true,
  appendDots: $('.reviews_dots'),
  infinite: true,
  arrows: false,
  speed: 700,
  slidesToShow: 1,
  adaptiveHeight: false,
  autoplay: false,
});

$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;

    var accordionHeader = this.el.find('.question_box_item_head');
    accordionHeader.on('click', {
      el: this.el,
      multiple: this.multiple
    },
      this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
      $this = $(this),
      //this is the ul.submenuItems
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.question_box_item_body').not($next).slideUp().parent().removeClass('open');
    }
  }

  var accordion = new Accordion($('.question_box'), false);
});