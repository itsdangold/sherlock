// $(document).ready(function(){
//     var controller = new ScrollMagic.Controller({
//         globalSceneOptions: {
//             triggerHook: 'onCenter'
//         }
//     });

//     var scene = new ScrollMagic.Scene({triggerElement: '.hero__title', duration: 500, offset: 1000})
//     .setTween('.title--right', 1, {translateX: '-100%'})
//     .addTo(controller);


// });

window.addEventListener('scroll', function(){
    document.querySelector(".title--right").style.transform = `translateX(${(Math.round(scrollY))}px)`;

    document.querySelector(".title--left").style.transform = `translateX(-${(Math.round(scrollY))}px)`;
});