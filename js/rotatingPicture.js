"use strict";

var slides = document.getElementById("slides");
var slideList = slides.children;
var nSlides = slideList.length;
var i = -1;

for (i = 0; i < nSlides; ++i) {
  var slide = slideList[i];
  if (!slide.classList.contains("hidden")) {
    break;
  }
}

if (i == -1) {
  i = 0;
}

setInterval(function() {
  console.log("rotating...");
  slide = slideList[i];
  slide.classList.add("hidden");
  i = (i + 1) % nSlides;
  slide = slideList[i];
  slide.classList.remove("hidden");
}, 2000);
