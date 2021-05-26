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
		autoplaySpeed: 6000
	});
});
