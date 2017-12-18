$(document).ready(function(){
    $(".header-arr").on('click','a[href*="#"]', function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1500);
    });
});