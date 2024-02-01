
window.addEventListener("scroll", reveal);

var sliderIndex = 0;
showSlider();

var sliderIndex1 = 0;
showSlider1();

var sliderIndex2 = 0;
showSlider2();
// Next/previous controls
function plusSlider(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlider(n) {
  showSlider(sliderIndex = n);
}

function showSlider() {
  var i;
  var sliders = document.getElementsByClassName("mySlider");
  for (i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }
  sliderIndex++;
  if (sliderIndex > sliders.length) {sliderIndex = 1}
  sliders[sliderIndex-1].style.display = "block";
  setTimeout(showSlider, 6000); // Change image every 2 seconds
}

function showSlider1() {
  var i;
  var sliders1 = document.getElementsByClassName("mySlider1");
  for (i = 0; i < sliders1.length; i++) {
    sliders1[i].style.display = "none";
  }
  sliderIndex1++;
  if (sliderIndex1 > sliders1.length) {sliderIndex1 = 1}
  sliders1[sliderIndex1-1].style.display = "block";
  setTimeout(showSlider1, 6000); // Change image every 2 seconds
}

function showSlider2() {
  var i;
  var sliders2 = document.getElementsByClassName("mySlider2");
  for (i = 0; i < sliders2.length; i++) {
    sliders2[i].style.display = "none";
  }
  sliderIndex2++;
  if (sliderIndex2 > sliders2.length) {sliderIndex2 = 1}
  sliders2[sliderIndex2-1].style.display = "block";
  setTimeout(showSlider2, 6000); // Change image every 2 seconds
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");

    } else {
      reveals[i].classList.remove("active");
    }
  }
}

