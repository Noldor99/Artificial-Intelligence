// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__menu');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}

new Swiper('.agency-slider',{
   slidesPerView:5,
//   centeredSlides: true,
   loop: true,
   spaceBetween: 30,
   slidesPerGroup: 2,
   pagination: {
      el: '.swiper-pagination',
   },
   breakpoints:{
      160:{
         slidesPerView:1,
      },
      700:{
         slidesPerView:2,
      },
      1000:{
         slidesPerView:3,
      },
      1400:{
         slidesPerView:4,
      },
      1800:{
         slidesPerView:5,
      },
   }
   });

   $(document).ready(function() {
      $('.block__title').click(function(event) {
         if($('.block').hasClass('one')){
            $('.block__title').not($(this)).removeClass('active');
            $('.block__text').not($(this).next()).slideUp(300);
         }
         $(this).toggleClass('active').next().slideToggle(300);
      });
   });

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.list-header__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

//			if (iconMenu.classList.contains('_active')) {
//				document.body.classList.remove('_lock');
//				iconMenu.classList.remove('_active');
//				menuBody.classList.remove('_active');
//			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}