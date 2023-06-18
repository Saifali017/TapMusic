window.addEventListener('load',()=>{
    const sounds=document.querySelectorAll('.sound')
    const pads=document.querySelectorAll('.pads div')
    const visuals=document.querySelector('.visuals')
    const colors=[
        "blueviolet"," rgb(255, 19, 94)","rgb(0, 183, 70)"
    ]

    console.log(sounds)
    pads.forEach((pad,idx)=>{
        pad.addEventListener('click',function(){
            sounds[idx].currentTime=0;
            sounds[idx].play();
            createbybbles(idx)
        })
    })

    const createbybbles=(idx)=>{
        const bubble=document.createElement("div")
        visuals.appendChild(bubble);
        bubble.style.backgroundColor=colors[idx]
        bubble.style.animation="jump 1s ease"
        bubble.addEventListener('animationend' ,function(){
            visuals.removeChild(this)
        })
    }

})
