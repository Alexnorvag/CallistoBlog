$(document).ready(function () {
    $(".header-arr").on('click', 'a[href*="#"]', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1500);
    });
});