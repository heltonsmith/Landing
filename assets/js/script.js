$(function(){
    $(".features__inner-icon").click(function(){
        $(this).next().toggle();
        $(this).next().next().toggle();
    });
});