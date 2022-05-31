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
   slidesPerView:2,
//   centeredSlides: true,
   loop: true,
   spaceBetween: 30,

   pagination: {
      el: '.swiper-pagination',
   },
   });
