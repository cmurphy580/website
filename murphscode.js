const head = document.querySelector('.header');
const text = head.querySelector('h1');
const walkShadow = 30;

function shadow (event) {
  const { offsetWidth: width, offsetHeight: height } = head;
  let { offsetX: x, offsetY: y } = event;
  if (this !== event.target) {
    x = x + event.target.offsetLeft;
    y = y + event.target.offsetTop;
  }
  //console.log({x: x, y: y})
  console.log({this: this, event: event.target, y: y})
  const xWalk = -1 * Math.round((x / width * walkShadow) - (walkShadow / 2));
  const yWalk = -1 * Math.round((y / height * walkShadow) - (walkShadow / 2));
  text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(0, 0, 0, 0.3)`;
  text.style.boxShadow = `${xWalk}px ${yWalk}px 0 rgba(0, 0, 0, 0.3)`;
}

head.addEventListener('mousemove', shadow);

//--------------------------------------------------------------------------

var dots = [];
  for (var i = 0; i < 1; i++) {
    var node = document.createElement("div");
    node.className = "trail";
    header.appendChild(node);
    dots.push(node);
  }
  var currentDot = 0;

  addEventListener("mousemove", function(event) {
    var dot = dots[currentDot];
    dot.style.left = (event.pageX - 5) + "px";
    dot.style.top = (event.pageY - 5) + "px";
    currentDot = (currentDot + 1) % dots.length;
  });

//--------------------------------------------------------------------------

$(function() {
  smoothScroll(1776);
});

function smoothScroll(duration) {
  $('a[href^="#"]').on('touchstart click', function(event) {

    var target = $($(this).attr('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 100
      }, duration);
    }
  });
}

//--------------------------------------------------------------------------

const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav() {
	//console.log(topOfNav, window.scrollY);
	if (window.scrollY >= topOfNav) { //add a class to the body instead of the specific element, that way it easier to target any of the children elements
		document.body.style.paddingTop = nav.offsetHeight + 'px';
		document.body.classList.add('fixed-nav');
	} else {
		document.body.style.paddingTop = 0;
		document.body.classList.remove('fixed-nav');
	}
}

window.addEventListener('scroll', fixNav);
//--------------------------------------------------------------------------
/*
const arrowRight = document.querySelector('.arrow-right');
let boolean = true;

const pulse = setInterval(function() {
  if (boolean) {
    arrowRight.style.opacity = '1.0';
    arrowRight.style.color = '#0F0FB0';
    boolean = !boolean;
    console.log()
  } else {
    arrowRight.style.fontSize = '';
    arrowRight.style.opacity = '';
    arrowRight.style.color = '';
    boolean = !boolean;
  }
}, 1200);

arrowRight.addEventListener('click touchstart', () => clearInterval(pulse));
*/
//--------------------------------------------------------------------------
/*
$(function() {
  pageSlider();
});

function pageSlider() {
  $(".arrow-right").on('click touchstart', function() {
    $(".slider-page").css("left", "-100%");
    $(".write-container").show();
  });
}
  $(".return-arrow").on('click touchstart', function() {
    $(".slider-page").css("left", "0%");
    $(".write-container").hide(800);
  });
*/
//--------------------------------------------------------------------------
const slider = document.querySelector('.items');
let isDown = false, hasMoved = false, startX, x, scrollLeft;
let initial, now, time, distance, velocity, amplitude, target;

slider.addEventListener('mousedown', (event) => {
  isDown = true;
  slider.classList.add('active');
  initial = Date.now();
  startX = event.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  hasMoved = false;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (event) => {
  if (!isDown) return;
  event.preventDefault();
  x = event.pageX - slider.offsetLeft;
  const walk = (x - startX);
  slider.scrollLeft = scrollLeft - walk;
  hasMoved = true;
});

slider.addEventListener('mouseup', (event) => {
  isDown = false;
  slider.classList.remove('active');
  now = Date.now();
  time = (now - initial);
  distance = (x - startX);
  velocity = (distance) / (time);

  if (velocity < -0.5 || velocity > 0.5) {
    amplitude = velocity * -1000;
    target = Math.round(amplitude + slider.scrollLeft);
    requestAnimationFrame(autoScroll);
  }
  event.stopPropagation();
  event.preventDefault();
});

function autoScroll() {
    var elapsed, delta;
    if (amplitude && hasMoved) {
        elapsed = Date.now() - now;
        delta = -amplitude * Math.exp(-elapsed / 325);
        if (delta > 0.5 || delta < -0.5) {
            slider.scrollLeft = target + delta;
            requestAnimationFrame(autoScroll);
        } else {
            slider.scrollLeft = target;
        }
    }
}
//---------------------------------------------------------------------
//---------------------------------------------------------------------
