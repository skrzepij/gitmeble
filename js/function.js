/*** All scripts go here ****/


$(function(){
    
   $('#main').find('.bxslider').bxSlider({
       mode: 'fade',
       captions: true,
       auto: true
   });
    
    $('.gallery').magnificPopup({
        delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
    });
    
});