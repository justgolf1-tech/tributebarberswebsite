/* Tribute Barbershop Lounge — Scripts */

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var navLeft = document.querySelector('.nav-left');
  var navRight = document.querySelector('.nav-right');

  if (toggle) {
    toggle.addEventListener('click', function () {
      navLeft.classList.toggle('open');
      navRight.classList.toggle('open');
    });
  }
});
