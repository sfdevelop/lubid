//Крепим меню при прокрутке
$(document).ready(function () {

	var $menu = $("#menu");

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100 && $menu.hasClass("menu")) {
			$menu.addClass("fixedsf");
		} else if ($(this).scrollTop() <= 100 && $menu.hasClass("fixedsf")) {
			$menu.removeClass("fixedsf").addClass("menu");
		}
	}); //scroll 
});

// основной слайдер
$(document).ready(function () {
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		autoplay: true,
		autoplaySpeed: 6000
	});
});

// main services slider
$(document).ready(function () {
	$('.slider_services').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		autoplay: true,
		rows: 0,
		autoplaySpeed: 6000,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});
// main comments slider
$(document).ready(function () {
	$('.seed_slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		pauseOnHover: false,
		autoplay: false,
		rows: 0,
		autoplaySpeed: 6000,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});
//боковое  меню
$(document).ready(function () {
	$("#navToggle").click(function () {
		$(this).toggleClass("active");
		$(".overlay").toggleClass("open");
		// this line ▼ prevents content scroll-behind
		$("body").toggleClass("locked");
	});
	$('.mobile_li').click(function (ev) {
		$(this).find('>ul').slideToggle();
		ev.stopPropagation();
	});
});