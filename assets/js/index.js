$(document).ready(function(){
    var controller = new ScrollMagic.Controller(
        {
            globalSceneOptions: {
                duration: 200
            }
        }
    );

    $('.content__text').each(function(){
        var tween = TweenMax.to(this, 1, {className:'+=fade-in'});
        var scene = new ScrollMagic.Scene({triggerElement: this})
        .setTween(tween)
        .addTo(controller);
        
    }
    );

    var tweenQuote = TweenMax.to(this, 1, {className:'+=fade-in'});
    var fadeQuote = new ScrollMagic.Scene(
        {triggerElement: 'blockquote'})
        .setTween(tweenQuote    )
        .addTo(controller);

});

window.addEventListener('scroll', function(){
    document.querySelector(".title--right").style.transform = `translateX(${(Math.round(scrollY))}px)`;

    document.querySelector(".title--left").style.transform = `translateX(-${(Math.round(scrollY))}px)`;
});