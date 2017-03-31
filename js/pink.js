        var headerMenu = document.querySelector('.header-menu');
        var navToggle = document.querySelector('.header-menu__toggle');
        var headerStripe = document.querySelector('.header-stripe');
        headerMenu.classList.remove('header-menu--nojs');
        if (headerMenu.classList.contains('header-menu--nojs')) {
        	headerStripe.classList.add('header-stripe--bg');
        }
        else {
        	headerStripe.classList.remove('header-stripe--bg');
        }
        navToggle.addEventListener('click', function () {
        	if (headerMenu.classList.contains('header-menu--closed')) {
        		headerMenu.classList.remove('header-menu--closed');
        		headerMenu.classList.add('header-menu--opened');
        		headerStripe.classList.add('header-stripe--bg');
        	}
        	else {
        		headerMenu.classList.remove('header-menu--opened');
        		headerMenu.classList.add('header-menu--closed');
        		headerStripe.classList.remove('header-stripe--bg');
        	}
        });