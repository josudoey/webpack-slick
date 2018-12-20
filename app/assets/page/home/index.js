
require('slick-carousel/slick/slick.css')
require('slick-carousel/slick/slick.js')
require('./style.css')

$('.slide-block .slide-wrapper').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  adaptiveHeight: false,
  autoplay: true,
  autoplaySpeed: 4000,
  centerMode: false,
  variableWidth: false,
  dotsClass: 'slide-dots',
  appendDots: '.slide-btn-wrapper',
  prevArrow: '',
  nextArrow: ''
})
const slickLi = $('.slide-dots li')
const slickLiWidth = parseInt(100 / (slickLi.length + 1))
slickLi.each(function (index, item) {
  $(item).css('width', slickLiWidth + '%')
})

const responsive = function () {
  setTimeout(function () {
    const w = $('.slide-block').innerWidth()
    const h = $('.slide-block').innerHeight()
    $('.slide-block .slick-slide').width(w)
    $('.slide-block .slick-slide').height(h)
  }, 0)
}

$(window).resize(responsive)
responsive()
