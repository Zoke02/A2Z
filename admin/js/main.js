$(document).ready(function () {
	$('#menu-user').on('click', function () {
		$('.default-hide-user').toggleClass('menu-list');
		$('.default-hide-categories').removeClass('menu-list');
	});
	$('#menu-categories').on('click', function () {
		$('.default-hide-categories').toggleClass('menu-list');
		$('.default-hide-user').removeClass('menu-list');
	});
});

$(document).ready(function () {
	$('.default-hide-user').on('mouseleave', function () {
		$('.default-hide-user').toggleClass('menu-list');
	});
	$('.default-hide-categories').on('mouseleave', function () {
		$('.default-hide-categories').toggleClass('menu-list');
	});
});

// More.. and Less.. Animation.
$(document).ready(function () {
	var moreText = 'More Info...';
	var lessText = 'Less Info...';
	$('.btn-slide').click(function () {
		event.preventDefault();
		if ($(this).hasClass('less')) {
			$(this).removeClass('less');
			$(this).html(moreText);
		} else {
			$(this).addClass('less');
			$(this).html(lessText);
		}
		$('html').animate(
			{
				scrollTop: $(this).parent().offset().top - 18,
			},
			600 // Speed
		);

		$(this).prev().slideToggle('slow');

		return false;
	});
});

// Search
$(document).ready(function () {
	$('#search-field').keyup(function () {
		var input, cards;
		input = $('#search-field').val().toUpperCase();
		cards = $('.card');
		cards.each(function () {
			var card = $(this);
			var cardTitle = card.find('.card__title');
			var txtValue = cardTitle.text();
			if (txtValue.toUpperCase().indexOf(input) > -1) {
				card.slideDown(600);
			} else {
				card.slideUp(600);
			}
		});
	});
});
