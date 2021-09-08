import Splide from '@splidejs/splide';
import Video from '@splidejs/splide-extension-video';

new Splide( '#splide', {
	heightRatio: 0.5625,
	cover      : true,
	lazyLoad   : 'sequential',
	video      : {
		loop: true,
	},
} ).mount( { Video } );