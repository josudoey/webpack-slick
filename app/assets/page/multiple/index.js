
require('slick-carousel/slick/slick.css')
require('slick-carousel/slick/slick-theme.css')
require('slick-carousel/slick/slick.js')
require('./style.css')

$('.media-container .media-wrapper').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true
})

$('.img-modal').click(function (e) {
  $('.modal').css('display', 'block')
  const src = $(this).attr('src')
  const alt = $(this).attr('alt')
  $('.modal').html(`<div class="caption">${alt}</div><img class="modal-content" src="${src}">`)
})

$('.modal').click(function (e) {
  $(this).css('display', 'none')
})
