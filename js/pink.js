var headerMenu = document.querySelector('.header-menu');
		var navToggle = document.querySelector('.header-stripe__toggle');
		var headerStripe = document.querySelector('.header-stripe');
		navToggle.addEventListener('click', function () {
			if (headerMenu.classList.contains('header-menu--closed')) {
				navToggle.classList.add('header-stripe__toggle--opened')
				navToggle.classList.remove('header-stripe__toggle--closed')
				headerMenu.classList.remove('header-menu--closed');
				headerMenu.classList.add('header-menu__toggle--opened');
				headerStripe.classList.add('header-stripe--bg');
			}
			else {
				headerMenu.classList.add('header-menu--closed');
				headerMenu.classList.remove('header-menu--opened');
				navToggle.classList.remove('header-stripe__toggle--opened');
				navToggle.classList.add('header-stripe__toggle--closed');
				headerStripe.classList.remove('header-stripe--bg');
			}
		});