(()=>{    
const isTouchDevice = 'ontouchstart' in window;
if (!isTouchDevice) {
   (()=>{
    var page2 = document.querySelector("#page2");
    var cursor = document.querySelector("#cursor");
    
    window.addEventListener("mousemove" , (e)=>{
        gsap.to(cursor,{
          top:e.y,
          left:e.x,
          duration:.3,
        })
  })

  document.querySelectorAll('#nav-rgt *').forEach(elem=>{
    elem.addEventListener("mouseenter" ,()=>{
      gsap.to(cursor,{
        opacity:0,
        scale:0
      })
    } )
    elem.addEventListener("mouseleave" ,()=>{
      gsap.to(cursor,{
        opacity:1,
        scale:1
      })
    } )
  });


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

    let page5 = document.querySelector('#page5');

page5.addEventListener("mouseenter" , (e)=>{
    
          gsap.to(cursor,{
            width:"6rem",
            height:"6rem",
            backgroundColor:"#d8e0e0",
            translateY:"-50%",
            opacity:.7,
            zIndex:0
          })
          
    })
    page5.addEventListener("mouseleave" , (e)=>{
    
          gsap.to(cursor,{
            width:"15px",
            height:"15px",
            backgroundColor:"black",
            opacity:1,
            zIndex:10

          })
    
    })
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

gsap.from(".sect:nth-child(2)",{
  y:"80",
  opacity:0,
  duration:.8,
  //check official documentation for different types of effects according to the need no need to stick only to these properties i checked the documentation and it was very easy to understand with interactions and in learnt a lot so always refer to them
  scrollTrigger:{
    trigger: " #page5" ,
    scroller: "body" ,
    start: "30% 0%  " ,
    end: "30% 0%  " ,
    // markers: true,
    // scrub: 1,// increase val for more smootheness
  }
})

}
else{
  gsap.from(".sect:nth-child(2)",{
    y:"80",
    opacity:0,
    duration:.8,
    //check official documentation for different types of effects according to the need no need to stick only to these properties i checked the documentation and it was very easy to understand with interactions and in learnt a lot so always refer to them
    scrollTrigger:{
      trigger: " #page5" ,
      scroller: "body" ,
      start: "-55% 0%  " ,
      end: "-55% 0%  " ,
      // markers: true,
      // scrub: 1,// increase val for more smootheness
    }
  })
}
   
    })();




gsap.from("nav",{
    y:-10,
    opacity:0,
    delay:.25,
    duration:.4,
    stagger:.25
})


gsap.from("#page1 h1 span",{
    y:80,
    opacity:0,
    delay:.5,
    duration:.4,
    stagger:.25
})
gsap.from("#page2 video",{
    y:50,
    opacity:0,
    delay:.7,
    duration:.4,
    
})
gsap.from("#page3",{
    y:50,
    opacity:0,
    delay:.7,
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


let lg1 = document.querySelector('#lg-1');
let lg2 = document.querySelector('#lg-2');


gsap.to(lg1,{
  y:"-=104%",
  duration:.2,
  //check official documentation for different types of effects according to the need no need to stick only to these properties i checked the documentation and it was very easy to understand with interactions and in learnt a lot so always refer to them
  scrollTrigger:{
    trigger: "  nav" ,
    scroller: "body" ,
    start: "10% 0%  " ,
    end: " 10% 0% " ,
    // markers: true,
    scrub: 2,// increase val for more smootheness
  }
})
gsap.to(lg2,{
  y:"-=130%",
  duration:.2,
  //check official documentation for different types of effects according to the need no need to stick only to these properties i checked the documentation and it was very easy to understand with interactions and in learnt a lot so always refer to them
  scrollTrigger:{
    trigger: "  nav" ,
    scroller: "body" ,
    start: "10% 0%  " ,
    end: "10% 0%  " ,
    // markers: true,
    scrub: 2,// increase val for more smootheness
  }
})
gsap.to(".nonstick a",{
  y:"-=300%",
  opacity:0,
  //check official documentation for different types of effects according to the need no need to stick only to these properties i checked the documentation and it was very easy to understand with interactions and in learnt a lot so always refer to them
  scrollTrigger:{
    trigger: "  nav" ,
    scroller: "body" ,
    start: "10% 0%  " ,
    end: "10% 0%  " ,
    // markers: true,
    scrub: 1,// increase val for more smootheness
  }
})
gsap.from("#lft-4",{
  x:"-80",
  opacity:0,
  duration:.8,
  //check official documentation for different types of effects according to the need no need to stick only to these properties i checked the documentation and it was very easy to understand with interactions and in learnt a lot so always refer to them
  scrollTrigger:{
    trigger: " #page3" ,
    scroller: "body" ,
    start: "20% 0%  " ,
    end: "20% 0%  " ,
    // markers: true,
    // scrub: 1,// increase val for more smootheness
  }
})
gsap.from("#rgt-4",{
  x:"-80",
  opacity:0,
  duration:.8,
  //check official documentation for different types of effects according to the need no need to stick only to these properties i checked the documentation and it was very easy to understand with interactions and in learnt a lot so always refer to them
  scrollTrigger:{
    trigger: " #page3" ,
    scroller: "body" ,
    start: "20% 0%  " ,
    end: "20% 0%  " ,
    // markers: true,
    // scrub: 1,// increase val for more smootheness
  }
})
gsap.from(".sect:nth-child(1)",{
  y:"80",
  opacity:0,
  duration:.8,
  //check official documentation for different types of effects according to the need no need to stick only to these properties i checked the documentation and it was very easy to understand with interactions and in learnt a lot so always refer to them
  scrollTrigger:{
    trigger: " #page4" ,
    scroller: "body" ,
    start: "20% 0%  " ,
    end: "20% 0%  " ,
    // markers: true,
    // scrub: 1,// increase val for more smootheness
  }
})







gsap.from("#pg6-lft",{
  x:"-100",
  opacity:0,
  duration:.8,
  //check official documentation for different types of effects according to the need no need to stick only to these properties i checked the documentation and it was very easy to understand with interactions and in learnt a lot so always refer to them
  scrollTrigger:{
    trigger: " #page5" ,
    scroller: "body" ,
    start: "80% 0%  " ,
    end: "80% 0%  " ,
    // markers: true,
    // scrub: 1,// increase val for more smootheness
  }
})
gsap.from("#pg6-rgt img",{
  opacity:0,
  duration:1,
  //check official documentation for different types of effects according to the need no need to stick only to these properties i checked the documentation and it was very easy to understand with interactions and in learnt a lot so always refer to them
  scrollTrigger:{
    trigger: " #page5" ,
    scroller: "body" ,
    start: "80% 0%  " ,
    end: "80% 0%  " ,
    // markers: true,
    // scrub: 1,// increase val for more smootheness
  }
})
gsap.to("#pg6-rgt img",{
  objectPosition: "0% 50px",
  // duration:1,
  //check official documentation for different types of effects according to the need no need to stick only to these properties i checked the documentation and it was very easy to understand with interactions and in learnt a lot so always refer to them
  scrollTrigger:{
    trigger: " #page6" ,
    scroller: "body" ,
    start: "-20% 0%  " ,
    end: "100% 0%  " ,
    // markers: true,
    scrub: 1,// increase val for more smootheness
  }
})



