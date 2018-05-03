const libs = require('../scss/libs.scss');
const css = require('../scss/style.scss');

const bootstrap = require('bootstrap-sass/assets/javascripts/bootstrap.js');

const PhotoSwipe = require('photoswipe');
const PhotoSwipeUIDefault = require('photoswipe/src/js/ui/photoswipe-ui-default.js');

if ($('#carouselList').length > 0) {
  const carousel = require('./include/carousel.js');
  carousel();
}


$(document).ready(function() {
  var $pswp = $('.pswp')[0];
  var image = [];
  let items = [];

  $('.carousel__item').each( function() {
    var $pic = $(this);

    $pic.find('a').each(function() {
      const $href   = $(this).attr('href');
      const $size   = $(this).data('size').split('x');
      const $width  = $size[0];
      const $height = $size[1];

      var item = {
        src : $href,
        w   : $width,
        h   : $height
      }

      items.push(item);
    });

    $.each(items, function(index, value) {
      image[index]     = new Image();
      image[index].src = value['src'];
    });

    $pic.on('click', 'a', function(event) {
      event.preventDefault();

      var $index = $('.carousel__item__link').index(this);
      var options = {
        index: $index,
        bgOpacity: 0.85,
        showHideOpacity: true,
        shareEl: false,
      };

      var lightBox = new PhotoSwipe($pswp, PhotoSwipeUIDefault, items, options);
      lightBox.init();
    });
  });
});
