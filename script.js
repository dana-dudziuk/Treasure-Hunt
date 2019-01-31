$(".pacifier").hide();
$(".actiontwo").hide();
$(".bart").hide();
$(".actionthree").hide();
$(".actionfour").hide();
$(".marge").hide();
$(".donuts").hide();
$(".actionfive").hide();
$(".maggie").hide();
$(".actionone").hide();

$("button").click(function() {
    $("button").hide();
    $(".starter").hide();
    $(".maggie").show();
    $(".actionone").show();
    $("body").css("background","pink");
});

$(".maggie").click(function() {
    $(".maggie").hide();
    $(".actionone").hide();
    $(".pacifier").show();
    $(".actiontwo").show();
    $("body").css("background-color","lightgoldenrodyellow");
});

$(".pacifier").mouseenter(function() {
    $(".pacifier").hide();
    $(".actiontwo").hide();
    $(".bart").show();
    $("body").css("background-color","tomato");
    $(".actionthree").show();
});

$(".bart").mouseenter(function() {
    $(".actionfour").show();
    $(".actionthree").hide();
    $(".marge").show();
});

$(".bart").mouseleave(function() {
    $(".bart").hide();
    $("body").css("background-color","mediumseagreen");
});

$(".marge").click(function() {
    $(".donuts").show();
    $(".actionfive").show();
    $(".marge").hide();
    $(".actionfour").hide();
});


