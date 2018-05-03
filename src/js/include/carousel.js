module.exports = function() {
  const slick = require('slick-carousel/slick/slick.js');

  console.log('executed')

  $('#carouselList').slick({
    "slidesToShow": 7,
    "slidesToScroll": 4,
    "infinite": false,
    "prevArrow": '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    "nextArrow": '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
  });
};
