
//--------------------------------------------------------------------------
/*
const slider = document.querySelector('.items'); 
let isDown = false; 
let startX; 
let x;
let scrollLeft; 
let interval;
let walk;

slider.addEventListener('mousedown', (event) => {
  isDown = true; 
  slider.classList.add('active'); 
  startX = event.pageX - slider.offsetLeft;*/ /*event.pageX tells us where on the screen we clicked. the slider.offsetLeft will adjust the position value in the case there is any margin or padding*/
  /*scrollLeft = slider.scrollLeft;*/ /*tells us how far (left/right) we have scrolled. Used in later function.*/
  //console.log(scrollLeft);
  /*clearInterval(interval);
});

slider.addEventListener('mouseleave', () => {
  isDown = false; 
  slider.classList.remove('active'); 
}); 

slider.addEventListener('mousemove', (event) => {
  if (!isDown) return; 
  event.preventDefault(); 
  x = event.pageX - slider.offsetLeft; //tells us where the cursor is when they move to the left or the right. Same code as above. Need it to recalculate the position everytime we move the mouse. 
  //console.log({ x, startX }); //x is changing, startX is not changing. 
  walk = (x - startX) * 5; //how far we have deviated from that initial point. Multiply by three to speed up the scroll over effect.
  slider.scrollLeft = scrollLeft - walk; //changes the div to scroll
}); 

slider.addEventListener('mouseup', () => {
  isDown = false; 
  slider.classList.remove('active');
  /*
  let i = 0;
  console.log(i)
  let difference = Math.abs(x - startX);
  if (x > startX && difference > 150) {
      const interval = setInterval(function() {
        slider.scrollLeft -= 75;
        i++;
        if (i === 20)
          clearInterval(interval); 
      }, 50);
  } else if (x < startX && difference > 150) {
      const interval = setInterval(function() {
        slider.scrollLeft += 75;
        i++;
        if (i === 20)
          clearInterval(interval); 
      }, 50);
  }
}); */
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//window.addEventListener("deviceorientation", (event) => console.log({x: screenLeft, y: screenTop}, event));


//--------------------------------------------------------------------------
/*
const birds = document.querySelector('.birds');

let vanishingPoint = topOfNav / 2.5;

function manipulateHeader(event) {
  if (window.scrollY > vanishingPoint) {
    text.style.opacity = '0';
    birds.style.opacity = '0'
  } else if (window.scrollY < vanishingPoint) {
    text.style.opacity = '';
    birds.style.opacity = '';
  }
}

window.addEventListener('scroll', manipulateHeader); */
//--------------------------------------------------------------------------
//http://javascriptkit.com/dhtmltutors/parallaxscrolling/index.shtml
/*
window.requestAnimationFrame = window.requestAnimationFrame // Create cross browser requestAnimationFrame method:
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)};


//const mountains = document.querySelector('.mountain-range');

let scrollHeight = document.body.scrollHeight; //height of entire document
let windowHeight = window.innerHeight; //height of browser window
console.log({scrollHeight: scrollHeight, windowHeight: windowHeight});

function parallaxBirds() {
  let scrollTop = window.pageYOffset; //number of pixels document has scrolled vertically
  let scrollAmount = (scrollTop / (scrollHeight - windowHeight) * 4) * 100; //get amount scroll in (%) * 4 = rate moves across screen
  birds.style.left = 20 + scrollAmount + '%'; //set position of birds in %. inital + amount in % scrolled
}

window.addEventListener('scroll', function() {
  requestAnimationFrame(parallaxBirds) //on scroll call parallaBirds on next available screen paint
}, false); 

window.addEventListener('resize', function() { //on window resize
  let scrollTop = window.pageYOffset; //get number of pixels document has scrolled vertically
  let scrollAmount = (scrollTop / (scrollHeight - windowHeight) * 4) * 100; //get amount scrolled (in %)
  birds.style.left = 20 + scrollAmount + '%'; //set position of birds 
}, false); 
*/
//--------------------------------------------------------------------------
//------------------------------
