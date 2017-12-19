$(document).ready(function () {
    $.getJSON('js/articles.json', function (data) {
        $(data.articles).each(function (index, value) {
            $(".col.span_2_of_3").prepend("<div class='blog-post'><a href='#' class='post-image'><img src='https://static.tumblr.com/b1c3f552defbbd59642c44c9cecc7b78/nush1o4/q9cnof0oa/tumblr_static_tumblr_static__640.jpg'></a><div class='post-details'><h3><a href='post.html' class='blog-title' rel='bookmark'>" + value.title + "</a></h3><p class='post-content'>" + value.content + "</p><h2 class='date'><i class='fa fa-calendar' aria-hidden='true'></i>14 March 2015</h2><!--<a href='#' class='post-link'>Read More...</a>--></div></div>");
            $("a[href='post.html']").attr("href", "post.html?k=" + value.id);
        });
    });
});