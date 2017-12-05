$('a.smooth-scroll').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top + 20
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});
/*
$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let head = scroll > 400;
    if (head) {
        $(".heading").addClass("header-from-right");
    } else {
        $(this(".header-from-right")).addClass("heading");
    }
});
*/
$(document).ready(function() {
    let sum = $(window).scrollTop();
    let year2 = () =>{
        setTimeout(function() {
            document.getElementById("year").innerHTML = "2+ Years"}, 1000);
    }
    let year3 = () =>{
        setTimeout(function() {
            document.getElementById("year").innerHTML = "3+ Years"}, 2000);
    }
    let scrollOne = sum;
    let scrollTwo = sum;
    if (scrollOne){
         year2();
    } else {
         year3();
    }  if (scrollTwo){
        year3() 
    }
});
$(document).ready(function() {
    let sum = $(window).scrollTop();
    let year2 = () =>{
        setTimeout(function() {
            document.getElementById("year2").innerHTML = "2+ Years"}, 1000);
    }
    let year3 = () =>{
        setTimeout(function() {
            document.getElementById("year2").innerHTML = "3+ Years"}, 2000);
    }
    let scrollOne = sum;
    let scrollTwo = sum;
    if (scrollOne){
         year2();
    } else {
         year3();
    }

    if (scrollTwo){
        year3()
    }
});
$(document).ready(function() {
    let sum = $(window).scrollTop();
    let year2 = () =>{
        setTimeout(function() {
            document.getElementById("year3").innerHTML = "3+ Years"}, 1000);
    }
    let year3 = () =>{
        setTimeout(function() {
            document.getElementById("year3").innerHTML = "7+ Years"}, 2000);
    }
    let year4 = () =>{
        setTimeout(function() {
            document.getElementById("year3").innerHTML = "10+ Years"}, 3000);
    }
    let scrollOne = sum;
    let scrollTwo = sum;
    let scrollThree = sum;
    if (scrollOne){
         year2();
    } else {
        year3();
    }

    if (scrollTwo){
        year3();
    } else {
        year4();
    }
    if (scrollThree){
        year4();
    }
});

/*
console.log('working');


$(window).scroll(function() {
if ($(this).scrollTop() > 100) {
        $('.nav').addClass('nav-back-to-top');
}
else {
$('.nav').removeClass('nav-back-to-top');
}
});


console.log('working');
$(window).scroll(function() {
if ($(this).scrollTop() < 300) {
        $('.nav-back-to-top').addClass('nav-back-to-top-2');
}
else {
$('.nav-back-to-top').removeClass('nav-back-to-top-2');
}
});


$(document).ready(function (){
            $(".scroll").click(function (){
                $('html, body').animate({
                    scrollTop: $("#div-1").offset().top
                }, 1000);
            });
        });


console.log('working-last');
*/

$(document).ready(function(){
    $("div.panel").hide();
    $(".toggle_panel").click( function() {
        $('.panel').slideToggle();
        $(this).html($(this).html() == 'Close About Clemente' ? 'Open About Clemente' : 'Close About Clemente');   
    });
});
$(document).ready(function(){
    $("div.panel-2").hide();
    $(".toggle_panel-2").click( function() {
        $('.panel-2').slideToggle();
        $(this).html($(this).html() == 'See Less' ? 'Read More' : 'See Less');   
    });
});




function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}



console.log("I am working1");











function viva() {
  // For a single value you can pass in a Number rather than an Array
  window.navigator.vibrate(500);
}



function viv() {
  // For a single value you can pass in a Number rather than an Array
  window.navigator.vibrate(500);
}










