 
const $ = global.jQuery = require('jquery');
const popper = require('popper.js');  
const bootstrap = require('bootstrap');
const owl = require('owl.carousel2');
const SmoothScroll = require('smooth-scroll/dist/smooth-scroll.polyfills');


$(document).ready(function(){

    $('.nav-item.nav-link').on('click', ()=>{
        console.log('remove');
        $('.navbar-collapse').removeClass('show');
    });

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true
    });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    dots: true,
    center: true,
    autoplay: [0.6,0.6],
    touchDrag:true,
    responsive:{
        0:{
            items:1.6
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

