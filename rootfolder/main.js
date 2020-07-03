$(document).ready(function () {
    $(".dropdown").click(function () {
        $(".menu-bar").fadeToggle();
        $(".content-2").fadeOut();
        $(".content").animate({top:"50%"});
    });
    $(".read").click(function () {
        $(".about-details span").fadeToggle();
    });
    $(".tosign").click(function () {
        $("#register-form").fadeOut();
        $("#sign-form").fadeIn();
    });
    $(".toregister").click(function () {
        $("#register-form").fadeIn();
        $("#sign-form").fadeOut();
    });
});