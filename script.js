let heroright= document.querySelector(".hero-slider-right");
let heroleft= document.querySelector(".hero-slider-left");
let slider=document.querySelectorAll(".slider")
let heroimg=document.querySelector(".heroimg");
let counter=0;
let interval;

let images=[
    'images/hero1.jpg',
    'images/hero5.jpg',
    'images/hero8.jpg',
    'images/hero7.jpg'
];

function herochange(index) {
    heroimg.classList.add("fade");
    setTimeout(() => {
        heroimg.style.background = `url(${images[index]})`;
        heroimg.style.backgroundPosition = 'center';
        heroimg.style.backgroundSize = 'cover';
        heroimg.style.backgroundRepeat = 'no-repeat';
        slider.forEach((e, i) => {
            e.style.background = i === index ? '#eead4b' : 'none';
        });
        heroimg.classList.remove("fade");
    }, 500);
}

// function resetInterval() {
//     clearInterval(interval);
//     interval = setInterval(() => {
//         counter = (counter + 1) % images.length;
//         herochange(counter);
//     }, 10000);
// }

slider.forEach((dot,index)=>{
    dot.addEventListener("click",()=>{
        counter=index;
        herochange(counter);
        resetInterval();
    })
})

heroright.addEventListener("click",()=>{
    counter=(counter+1)%images.length;
    herochange(counter);
    resetInterval();
})

heroleft.addEventListener("click",()=>{
    counter=(counter-1+images.length)%images.length;
    herochange(counter);
    resetInterval();
})

resetInterval();