
gsap.from('#title', {
    Delay:0.4,
    opacity:0,
    duration:1.5,
    y:400,
})

gsap.from('#box',{
    opacity:0,
    duration:1,
    y:100,
    delay:0.5,
    
})

gsap.from('#event', {
    opacity:0,
    y:400,
    duration:1,
    delay:0.5,
    
    scrollTrigger: {
        trigger: '#event',
        scroller: 'body',
        start: 'top 99%',
        
        
        
        
    }
    
})

gsap.from('#gallery,#page4 h2,#page4 p', {
    opacity:0,
    y:100,
    duration:2,
    delay:0.5,
    
    scrollTrigger: {
        trigger: '#gallery,#page4 h2,#page4 p',
        scroller: 'body',
        start: 'top 99%',
        
        
        
        
    }
    
})