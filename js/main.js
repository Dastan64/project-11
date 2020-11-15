"use strict";

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
;
var menuBtn = document.querySelector('.header__menu-btn_mobile');
var menuMobile = document.querySelector('.header__menu_mobile');
menuBtn.addEventListener('click', function (e) {
  e.preventDefault();
  menuMobile.classList.toggle('menu-active');
  document.body.classList.toggle('body-no-scroll');
  menuBtn.classList.toggle('menu-btn_active');
});