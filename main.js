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

new Swiper('.agency__container',{
   slidesPerView:10,
   centeredSlides: true,
   loop: true,
   breakpoints:{
      160:{
         slidesPerView:2,
      },
      420:{
         slidesPerView:4,
      },
      600:{
         slidesPerView:5,
      },
      800:{
         slidesPerView:6,
      },
      1000:{
         slidesPerView:10,
      },
   }
   });
