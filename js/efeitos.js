$("#btn-bars").on("click", function(){

    $("header").toggleClass("open-menu");

});

$("#menu-mobile-mask, .btn-close"). on("click", function(){

    $("header").removeClass("open-menu");

});

$(function(){
$(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
            $(this).toggleClass('open');    
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
            $(this).toggleClass('open');               
        });
});