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
    // $(".wrapper").prepend("<h3>" + data.articles[numTitle].title + "</h3>");
    $("title").prepend(data.articles[numTitle].title);
    $("a[href='']").attr("href", "" + data.articles[numTitle].image);
    $("img[src='']").attr("src", "" + data.articles[numTitle].image);
});
