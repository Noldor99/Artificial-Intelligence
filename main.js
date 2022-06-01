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