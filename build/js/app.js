window.addEventListener("DOMContentLoaded", function () { });

const header = document.querySelector(".header");
const trigger = document.querySelector(".trigger");
const nav = document.querySelector(".nav");

header.classList.remove("header--nojs");

const openmenuNav = (evt) => {
  evt.preventDefault();
  header.classList.toggle("header--open");
  nav.classList.toggle("nav--animate");
  if (header.classList.contains("header--home")) {
    header.classList.remove("header--home");
  } else {
    header.classList.remove("header--open");
    header.classList.add("header--home");
  }
};

trigger.addEventListener("click", openmenuNav);
