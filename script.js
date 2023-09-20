const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}

var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    autoplay: {
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{ 
        640:{
            slidesPerview:1,
        },
        768:{
            slidesPerview:2,
        },
        1024:{
            slidesPerview:3,
        },
    }

});

var Swiper = new Swiper(".brand-slider", {
    spaceBetween:20,
    loop:true,
    autoplay: {
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{
        640:{
            slidesPerview:1,
        },
        768:{
            slidesPerview:2,
        },
        1024:{
            slidesPerview:3,
        },
    }

});


// Discount Media
// const video = document.querySelector(".video");
// const button = document.querySelector(".video-control");

// button.addEventListener("click", playpausevideo);

// function playpausevideo() {
//   if (video.paused) {
//     button.innerHTML = "<i class='bx bx-pause' ></i>";
//     video.play();
//   } else {
//     button.innerHTML = "<i class='bx bx-play' ></i>";
//     video.pause();
//   }
// }