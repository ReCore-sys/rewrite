$(document).ready(function () {
    showChildren();
    $(".panel-block").click(function () {
        if (!$(this).hasClass("is-active")) {
            // Remove the class from anything that is active
            $("a.is-active").removeClass("is-active");
            // And make this active
            $(this).addClass("is-active");

            var id = $(this).attr("rel");
            $(".faq-items>div.is-active").hide().removeClass("is-active");
            $(id).addClass("is-active");
            showChildren();
        }
    });
});
function showChildren() {
    $(".faq-items").children(".is-active").show();
}