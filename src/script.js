(()=>{    
const isTouchDevice = 'ontouchstart' in window;
if (!isTouchDevice) {
    var page2 = document.querySelector("#page2");
    var cursor = document.querySelector("#cursor");
    
    window.addEventListener("mousemove" , (e)=>{
        gsap.to(cursor,{
          top:e.y,
          left:e.x,
          duration:.3
        })
  })

  document.addEventListener("mouseenter" ,()=>{
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
  } )
  document.addEventListener("mouseleave" ,()=>{
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
  } )
    
    page2.addEventListener("mouseenter" , (e)=>{
    
          gsap.to(cursor,{
            width:"1.8rem",
            height:"1.8rem",
            translateY:"-50%",
            textContent:"PLAY"
          })
          
    })
    page2.addEventListener("mouseleave" , (e)=>{
    
          gsap.to(cursor,{
            width:"15px",
            height:"15px",
            textContent:""
          })
    
    })
}
   
    })();


(()=>{
    const lenis = new Lenis({
        duration: 2.5, // increase or decrese duration value to change smoothness values on website
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
                        
                      
        });
        function raf(time) {
         lenis.raf(time);
         ScrollTrigger.update(); //only apply when using scroll trigger on website
            requestAnimationFrame(raf);
        }
                      
        requestAnimationFrame(raf);
})();





gsap.from("#page1 h1 span",{
    y:80,
    opacity:0,
    delay:.25,
    duration:.4,
    stagger:.25
})
gsap.from("#page2 video",{
    y:50,
    opacity:0,
    delay:.55,
    duration:.4,
    
})


gsap.to(".elem img",{
    objectPosition: "center 0%",
    //check official documentation for different types of effects according to the need no need to stick only to these properties i checked the documentation and it was very easy to understand with interactions and in learnt a lot so always refer to them
    scrollTrigger:{
      trigger: "#page3" ,
      scroller: "body" ,
      start: "10% 90% " ,
      end: "80% 0%" ,
    //   markers: true,
      scrub: 1,// increase val for more smootheness
    }
})
gsap.to(".elem .card",{
    top:"60%",
    //check official documentation for different types of effects according to the need no need to stick only to these properties i checked the documentation and it was very easy to understand with interactions and in learnt a lot so always refer to them
    scrollTrigger:{
      trigger: "#page3" ,
      scroller: "body" ,
      start: "40% 90% " ,
      end: "75% 0%" ,
    //   markers: true,
      scrub: 1,// increase val for more smootheness
    }
})


let card = document.querySelectorAll('.card');

card.forEach(card=>{
    card.addEventListener("mouseenter" ,()=>{

        gsap.to(card,{
           height:"210px"
        })
    
    
    } )
    card.addEventListener("mouseleave" ,()=>{
    
        gsap.to(card,{
            height:"50px",
    
        })
    
    
    } )
})


// let underlinebtn = document.querySelector('#rgt-4 p:nth-child(3)');
// let underline = window.getComputedStyle(underlinebtn,"::after");
// underlinebtn.addEventListener("mouseenter" ,()=>{
//   gsap.to(underline,{
//     backgroundColor:"red",
//   })
// } )
