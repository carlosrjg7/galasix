 
const $ = global.jQuery = require('jquery');
const popper = require('popper.js');  
const bootstrap = require('bootstrap');
const owl = require('owl.carousel2');


$(document).ready(function(){
    console.log('hola Jquery home');
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
  });