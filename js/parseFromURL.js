function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var numTitle = getParameterByName('k') - 1;

$.getJSON('js/articles.json', function (data) {
    $("title").prepend(data.articles[numTitle].title);
    $("a[href='']").attr("href", "" + data.articles[numTitle].image);
    $("img[src='']").attr("src", "" + data.articles[numTitle].image);
    $(".post-title").prepend(data.articles[numTitle].title);
    $(".post > p.post-content").prepend(data.articles[numTitle].content);
    $("img.header-img[src='']").attr("src", "" + data.articles[numTitle].image);
    // $(".header").css("background", "url(" + data.articles[numTitle].image + ") center no-repeat");
});

$(document).ready(function() {
    $("[data-toggle]").click(function() {
        var toggle_el = $(this).data("toggle");
        $(toggle_el).toggleClass("open-sidebar");
    });
});
