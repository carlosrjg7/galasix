 
const $ = global.jQuery = require('jquery');
const popper = require('popper.js');  
const bootstrap = require('bootstrap');
const owl = require('owl.carousel2');


$(document).ready(function(){
    console.log('hola Jquery home');
});


$(document).ready(function(){
    

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:60,
    nav:false,
    dots: true,
    center: true,
    autoplay: true,
    touchDrag:true,
    responsive:{
        0:{
            items:1.5
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

});

