$(window).ready(function() {
    $(".homemenu").hover(function() {
            $(this).css("text-decoration", "underline");
            $(this).css("font-weight", "bold")
        },
        function() {
            $(this).css("text-decoration", "none");
            $(this).css("font-weight", "normal")
        });
    $(".gamemenu").hover(function() {
            $(this).css("text-decoration", "underline");
            $(this).css("font-weight", "bold")
        },
        function() {
            $(this).css("text-decoration", "none");
            $(this).css("font-weight", "normal")
        });

    $(".fleche").on('click', function() {
        var currentvideo = $(".video1");
        var nextvideo = currentvideo.fleche();
        if (nextvideo.length) {
            currentvideo.removeClass("video1");
            nextvideo.addClass("video1");
        }
    })
    $("#entete1").animate({
        "left": "30px"
    }, "slow");

    $(".img3").fadeIn(7000);
    $(".img6").fadeIn(10000);


});

const entete1 = document.querySelector("#entete1");
const titre = document.querySelectorAll(".titre");
const sousTitre = document.querySelectorAll(".sous-titre");
const TL1 = new TimelineMax({
    paused: false
})
$(document).ready(function() {
    TL1
        .from(entete1, 2, {
            opacity: 0,
            x: -500
        })
        .from(titre, 4, {
            opacity: 0,
            x: -500
        })
        .from(sousTitre, 1, {
            scale: 0
        });
})