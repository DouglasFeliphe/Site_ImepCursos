$("#btn-bars").on("click", function () {

    $("header").toggleClass("open-menu");

});

$("#menu-mobile-mask, .btn-close").on("click", function () {

    $("header").removeClass("open-menu");

});

$(function () {
    $(".dropdown").hover(
        function () {
            $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
            $(this).toggleClass('open');
        },
        function () {
            $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
            $(this).toggleClass('open');
        });
});

// BOTÕES DA GALERIA DE IMAGENS DO INSTA
function prev() {
    document.querySelector('.instagram_gallery').scrollLeft -= 300
}
function next() {
    // document.getElementById("custom-instagram-feed").scrollRight += 270
    document.querySelector('.instagram_gallery').scrollLeft += 300
}

// SUMIR BOTÕES AO ROLAR AS IMAGENS
function touchMove(event) {
    document.querySelector('.control-prev-btn').style.display = "none";
    document.querySelector('.control-next-btn').style.display = "none";
}
function touchEnd(event) {
    document.querySelector('.control-prev-btn').style.display = "flex";
    document.querySelector('.control-next-btn').style.display = "flex";
}



