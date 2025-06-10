$('.main_slider').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 700,
  slidesToShow: 1,
  adaptiveHeight: false,
  autoplay:false,
});
$('.franchise_slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 700,
  slidesToShow: 1,
  adaptiveHeight: false,
  autoplay: false,
});
$('.uniqueness_box_mobile').slick({
  dots: false,
  infinite: true,
  arrows: false,
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
  arrows: false,
  speed: 700,
  slidesToShow: 1,
  adaptiveHeight: false,
  autoplay: false,
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
  autoplay: true,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 1,
      }
      
    }

  ]
});


$('.reviews_slider').slick({
  dots: false,
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