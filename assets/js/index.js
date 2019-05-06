$(document).ready(function(){
    var controller = new ScrollMagic.Controller();

    $('.text__block').each(function(){
        var tween = TweenMax.to(this, 1, {className: "+=fade-in"});

        var scene = new ScrollMagic.Scene({triggerElement: this, duration: $(window).height()/2})
        .setTween(tween)
        .addTo(controller);
        }
    );

});

window.addEventListener('scroll', function(){
    document.querySelector(".title--right").style.transform = `translateX(${(Math.round(scrollY))}px)`;

    document.querySelector(".title--left").style.transform = `translateX(-${(Math.round(scrollY))}px)`;
});