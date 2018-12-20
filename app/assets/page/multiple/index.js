
require('slick-carousel/slick/slick.css')
require('slick-carousel/slick/slick-theme.css')
require('slick-carousel/slick/slick.js')
require('./style.css')

$('.media-container .media-wrapper').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true
})

// const slickLi = $('.slide-dots li')
// const slickLiWidth = parseInt(100 / (slickLi.length + 1))
// slickLi.each(function (index, item) {
//   $(item).css('width', slickLiWidth + '%')
// })

// $(window).resize(responsive)
// responsive()

$('.img-modal').click(function (e) {
  $('.modal').css('display', 'block')
  const src = $(this).attr('src')
  const alt = $(this).attr('alt')
  $('.modal').html(`<div class="caption">${alt}</div><img class="modal-content" src="${src}">`)
})

$('.modal').click(function (e) {
  $(this).css('display', 'none')
})
