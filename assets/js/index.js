$(document).ready(function(){
    var controller = new ScrollMagic.Controller(
        {
            globalSceneOptions: {
                triggerHook: 'onCenter'
            }
        }
    );

    $('.text__block').each(function(){
        var tween = TweenMax.to(this, 1, {className: "+=fade-in"});
        // var tween = TweenMax.fromTo(this, 1, {opacity:0, scale:0}, {opacity:1, scale:1});

        var scene = new ScrollMagic.Scene({triggerElement: this, duration: $(window).height()/1.5})
        .setTween(tween)
        .addTo(controller);
        }
    );

});

window.addEventListener('scroll', function(){
    document.querySelector(".title--right").style.transform = `translateX(${(Math.round(scrollY))}px)`;

    document.querySelector(".title--left").style.transform = `translateX(-${(Math.round(scrollY))}px)`;
});