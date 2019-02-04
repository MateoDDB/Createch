//= require jquery
//= require bootstrap
//= require_tree .
document.addEventListener('DOMContentLoaded', function(){
  let counter = 0;
  const carousselItems = document.querySelectorAll('.js-caroussel');

  setInterval(function(){

    if (counter >= carousselItems.length - 1) {
      counter = 0;
    } else {
      counter++;
    }

    for (let i = 0; i < carousselItems.length; i++) {
      if (carousselItems[i] != carousselItems[counter]) {
        carousselItems[i].classList.remove('is-visible');
      }
    }
    carousselItems[counter].classList.add('is-visible');
  }, 5000);

}) // Fin du DOM
