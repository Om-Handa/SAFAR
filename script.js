let heroright= document.querySelector(".hero-slider-right");
let heroleft= document.querySelector(".hero-slider-left");
let slider1=document.querySelector(".slider1");
let slider2=document.querySelector(".slider2");
let slider3=document.querySelector(".slider3");
let slider4=document.querySelector(".slider4");
let heroimg=document.querySelector(".heroimg");
let slider=document.querySelectorAll(".slider");
let counter_right=1;
let counter_left=5;

function herochange(url){
    heroimg.style.background=`url(${url})`;
    heroimg.style.backgroundPosition='center';
    heroimg.style.backgroundSize='cover';
    heroimg.style.backgroundRepeat='no-repeat';
    slider.forEach(e => {
        e.style.background='none';
    });
}

slider1.addEventListener("click", ()=>{
    herochange('images/hero1.jpg')
    slider1.style.background='#eead4b'
})
slider2.addEventListener("click", ()=>{
    herochange('images/hero2.avif')
    slider2.style.background='#eead4b'
})
slider3.addEventListener("click", ()=>{
    herochange('images/hero3.jpg')
    slider3.style.background='#eead4b'
})
slider4.addEventListener("click", ()=>{
    herochange('images/hero4.jpg')
    slider4.style.background='#eead4b'
})

heroright.addEventListener("click",()=>{
    counter_right++;
    console.log(counter_right)
    switch(counter_right){
        case 1:
            herochange('images/hero1.jpg');
            slider1.style.background='#eead4b';
            break;
        case 2:
            herochange('images/hero2.avif');
            slider2.style.background='#eead4b'; 
            break;
        case 3:
            herochange('images/hero3.jpg');
            slider3.style.background='#eead4b'; 
            break;
        case 4:
            herochange('images/hero4.jpg');
            slider4.style.background='#eead4b'; 
            break;
        default:
            counter_right=1;
            herochange('images/hero1.jpg');
            slider1.style.background='#eead4b';
            break;
    }
})

heroleft.addEventListener("click",()=>{
    counter_left--;
    console.log(counter_left)
    switch(counter_left){
        case 1:
            herochange('images/hero1.jpg');
            slider1.style.background='#eead4b';
            break;
        case 2:
            herochange('images/hero2.avif');
            slider2.style.background='#eead4b'; 
            break;
        case 3:
            herochange('images/hero3.jpg');
            slider3.style.background='#eead4b'; 
            break;
        case 4:
            herochange('images/hero4.jpg');
            slider4.style.background='#eead4b'; 
            break;
        default:
            counter_left=4;
            herochange('images/hero4.jpg');
            slider4.style.background='#eead4b';
            break;
    }
})
