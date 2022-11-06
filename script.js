var tl = gsap.timeline();

tl
.from("#nav,#bottom",{
    y:-100,
    opacity:0,
    stagger:1,
    duration:1,
    ease : Back.ease
})
.from("#circle",{
    height:"0",
    width:"0",
    opacity:0,
    duration:1.5,
    ease: Expo.easeInOut
})
.from("#rectangle img",{
    height:"0",
    width:"0",
    opacity:0,
    duration:1.5,
    ease:Expo.easeInOut
})
.from("#caramel",{
    x:-400,
    opacity:0,
    duration:2,
    ease:Expo.easeInOut
})
.from("#macarons",{
    opacity:0,
    duration:2,
    x:400,
    ease: Expo.easeInOut
},'-=2')
