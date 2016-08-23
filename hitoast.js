/**
 * HiToast.js
 * Notification Library similar to Toast For Mobile Apps
 * @author HiColdCat
 * @license MIT
 * See more at: https://github.com/hicoldcat/HiToast
 */

/*
*Params:
*	text: text want to show
*	options: object that about the style
*		thems: Default 'Info' .  ('Success','Warning','Error','Info') can be chosen.
*		duration: Default 3000ms . Duration of the notification in ms.
*		fade-time: Default 'normal' . Duration of the fade in/out of the notification.  'fast','slow' ,'normal'or time in ms can be chosen.
*		position: Default 'bottom' . ('top','center','bottom') can be chosen.
*		container-id: Default 'hitoast' . Id of the alert container. 
*/
function hiToast(text,options) {
	var defaultOptions = {
		'thems'	: 'Info',		//'Info','Success','Waring','Error'
		'duration'	: 3000,		//Duration of the notification in ms
		'fade-time'	: 'normal',		//'fast','slow','normal'or integer in ms
		'position'	: 'bottom',		//'top','center','bottom'
		'container-id'	: 'hitoast'		// Id of the alert container. 
	};

	options = (typeof options == 'object') ? $.extend(defaultOptions, options) : defaultOptions;

	var $container = $('#' + options['container-id']),
	thems_markup = '';

	if (options.thems) {
		thems_markup = 'toast-' + options.thems;
	}

	var html = $('<div class="toast  ' + thems_markup + '">' + text + '</div>').fadeIn(options['fade-time']);
	
	$container.append(html);

	var width = ($(window).width() / 2- $(".toast").outerWidth() /2) +"px";
	var height = '20px';
	if (options.position == 'top') {
		height = ($(window).height() * 1 / 5- $(".toast").outerHeight() /2) +"px";
	}else if (options.position == 'center') {
		height = ($(window).height() / 2 - $(".toast").outerHeight() /2) +"px";
	}else if (options.position == 'bottom') {
		height = ($(window).height() * 4 / 5- $(".toast").outerHeight() /2) +"px";
	}
	
	$(".toast").css("left",width) ;
	$(".toast").css("top",height) ;

	html.on('click', function() {
		hiToastX($(this));
	});

	setTimeout(function () {
		hiToastX(html);
	},options.duration);
}

/*Removes a toast from the page
* Params:
 *    Called without arguments, the function removes all alerts
 *    element: a jQuery object to remove
 *    options:
 *    	duration: Default 'fast' .  Duration of the alert fade out .  'fast', 'slow' or time in ms can be chosen .
 */
 function hiToastX(element,options) {
 	defaultOptions = {
 		'duration'	: 'fast'
 	};

 	options = (typeof options == 'object') ? $.extend(defaultOptions, options) : defaultOptions;

 	if (typeof element !== "undefined") {
 		element.fadeOut(options.duration, function() {
 			$(this).remove();
 		});
 	} else {
 		$('.toast').fadeOut(options.duration, function() {
 			$(this).remove();
 		});
 	}
 }