Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hoverani",{videos:["/0.mp4","/2.mp4","/3.mp4"]})
gsap.to(".fleftelem",{
    scrollTrigger:{
        trigger:"#featureimages",
        start:"top top",
        end:"end end",
        endTrigger:".last",
        pin:true,
        scrub:1,
        // markers:true,
    },
   y:"-300%",
   ease:Power1
})
let prajwol=document.querySelectorAll(".fleftelem");
Shery.imageEffect(".fimages", {
    style: 2,
    // config: {onMouse:{value:1}},
    slideStyle: (setScroll) => {
      prajwol.forEach(function(section,index){
        ScrollTrigger.create({
            trigger:section,
            start:"top top",
            scrub:1,
            onUpdate:function(prog){
               setScroll(prog.progress+index)
            },
        });
      });
    },
  });