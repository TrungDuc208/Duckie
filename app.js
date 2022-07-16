const header = document.querySelector("header");
const links = document.querySelectorAll(".nav-link");
// project changer
$(".project-title1").click(function(){
    $(".project1").fadeIn();
    $(".project2").css("display","none");
    $(".project3").css("display","none");
    $(".s1").fadeIn(500);
    $(".s2").css("display","none");
    $(".s3").css("display","none");
    $(".l1").fadeIn(500);
    $(".l2").css("display","none");
    $(".l3").css("display","none");
    return false;
})
$(".project-title2").click(function(){
    $(".project2").fadeIn();
    $(".project1").css("display","none");
    $(".project3").css("display","none");
    $(".s2").fadeIn(500);
    $(".s1").css("display","none");
    $(".s3").css("display","none");
    $(".l2").fadeIn(500);
    $(".l1").css("display","none");
    $(".l3").css("display","none");
    return false;
})
$(".project-title3").click(function(){
    $(".project3").fadeIn();
    $(".project1").css("display","none");
    $(".project2").css("display","none");
    $(".s3").fadeIn(500);
    $(".s1").css("display","none");
    $(".s2").css("display","none");
    $(".l3").fadeIn(500);
    $(".l1").css("display","none");
    $(".l2").css("display","none");
    return false;
})

/* ------------ Sticky Navbar -------------*/

$(window).bind('scroll', function () {
    if ($(document).scrollTop() > 200) {
        $('.sticky-nav').addClass('fixed');
        $(".sticky-nav").fadeIn();
    }else {
        $(".sticky-nav").fadeOut();
    }
});


/* ------------ Reveal animation -------------*/
let sr = ScrollReveal({
    duration: 800,
    distance: "60px",
  });
  sr.reveal(".home-image", { delay: 800 });
  sr.reveal(".content-wrapper-reveal", { delay: 800 });
  sr.reveal(".content-wrapper", { origin: "top", delay: 800 });