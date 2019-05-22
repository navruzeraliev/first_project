const progress = document.querySelector('.progress')
window.addEventListener('scroll', progreessBar);

function progreessBar(e){
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let per = windowScroll / windowHeight * 100;
    progress.style.width = per + '%';
}

$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html");
    $("#popup").load("popup.html");
    $("#header-white").load("header-white.html");
});

$('.open_popup').click(function() {
    $('.popup').addClass('.adds');
    var popup_id = $('#' + $(this).attr("rel"));
        $(popup_id).show();
        $('.overlay').show();
    })
        $('.popup .close, .overlay').click(function() {
        $('.overlay, .popup').hide();
});

$('[data-fancybox="gallery"]').fancybox({
    loop: true,
    buttons: [
        // "zoom",
        "slideShow",
        "fullScreen",
        "download",
        "thumbs",
        "close"
      ],
      clickContent: false
});

$(".article").click(function(){
    event.preventDefault();
    $(this).hide();
    $(this).siblings().show();
    $(this).closest('ul').addClass('procent');
    $(this).closest('ul').siblings().removeClass('procent');
});

$(function(){
    $(".bycicle-product").slice(0, 3).show();
    $(".pod").on('click', function(e){
        $(".bycicle-product:hidden").slice(0, 3).show();
    });
});