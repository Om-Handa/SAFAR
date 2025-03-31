let heroright= document.querySelector(".hero-slider-right");
let heroleft= document.querySelector(".hero-slider-left");
let slider1=document.querySelector(".slider1");
let slider2=document.querySelector(".slider2");
let slider3=document.querySelector(".slider3");
let slider4=document.querySelector(".slider4");
let heroimg=document.querySelector(".heroimg");
let slider=document.querySelectorAll(".slider");
let counter=1;

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
    counter=1;
    countercheck(counter);
})
slider2.addEventListener("click", ()=>{
    counter=2;
    countercheck(counter);
})
slider3.addEventListener("click", ()=>{    
    counter=3;
    countercheck(counter);
})
slider4.addEventListener("click", ()=>{
    counter=4;
    countercheck(counter);
})

heroright.addEventListener("click",()=>{
    counter++;
    countercheck(counter)
    if (counter>4){
        counter=1;
        countercheck(counter)
    }
})

heroleft.addEventListener("click",()=>{
    counter--;
    console.log(counter)
    countercheck(counter)
    if (counter<=0){
        counter=4;
        countercheck(counter)
    }
})

function countercheck(counter){
    switch(counter){
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
    }
}

setInterval(() => {
    counter++;
    countercheck(counter);
    if (counter>4){
        counter=1;
        countercheck(counter);
    }
}, 5000);