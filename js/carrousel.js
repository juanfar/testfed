import { getUsers, getPosts } from './api.js';
var slideIndex = 0;
showSlides();
const text1 = document.getElementById("text1");
const name1 = document.getElementById("name1");
const text2 = document.getElementById("text2");
const name2 = document.getElementById("name2");
const text3 = document.getElementById("text3");
const name3 = document.getElementById("name3");

getUsers(1).then(name => {
  name1.innerHTML = name;
});
getUsers(2).then(name => {
  name2.innerHTML = name;
});
getUsers(3).then(name => {
  name3.innerHTML = name;
});
getPosts(1).then(text => {
  text1.innerHTML = `"${text}"`;
});
getPosts(2).then(text => {
  text2.innerHTML = `"${text}"`;
});
getPosts(3).then(text => {
  text3.innerHTML = `"${text}"`;
});


function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 7000);
}