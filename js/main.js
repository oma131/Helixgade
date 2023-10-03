$(function(){"use strict";var e,i=document.getElementsByClassName("mil-accordion");for(e=0;e<i.length;e++)i[e].onclick=function(){this.classList.toggle("mil-active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"};$(".mil-menu-btn").on("click",function(){$(this).toggleClass("mil-active"),$(".mil-navigation").toggleClass("mil-active")}),$(window).on("scroll",function(){$(window).scrollTop()>=220?($(".mil-top-panel.mil-animated").removeClass("mil-top-panel-transparent"),$(".has-additional-panel").addClass("mil-hide-top")):($(".mil-top-panel.mil-animated").addClass("mil-top-panel-transparent"),$(".has-additional-panel").removeClass("mil-hide-top"))}),new Swiper(".mil-banner-slideshow",{slidesPerView:1,spaceBetween:0,speed:1500,autoplay:!0,effect:"fade",parallax:!0,autoplay:{delay:5e3},loop:!0,pagination:{el:".mil-pagination",type:"bullets",clickable:!0}}),new Swiper(".mil-banner-slider",{slidesPerView:1,spaceBetween:0,speed:1500,autoplay:!0,effect:"fade",parallax:!0,autoplay:{delay:5e3},loop:!0,navigation:{prevEl:".mil-banner-prev",nextEl:".mil-banner-next"}}),new Swiper(".mil-works-slider",{slidesPerView:1,spaceBetween:30,speed:800,navigation:{prevEl:".mil-works-prev",nextEl:".mil-works-next"},breakpoints:{768:{slidesPerView:2}}}),new Swiper(".mil-blog-slider",{spaceBetween:30,speed:800,slidesPerView:1,navigation:{prevEl:".mil-blog-prev",nextEl:".mil-blog-next"},breakpoints:{768:{slidesPerView:2},992:{slidesPerView:2},1200:{slidesPerView:"auto"}}}),new Swiper(".mil-revi-slider",{slidesPerView:1,spaceBetween:30,speed:800,navigation:{prevEl:".mil-revi-prev",nextEl:".mil-revi-next"},breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}}}),new Swiper(".mil-revi-slider-2",{slidesPerView:1,spaceBetween:30,speed:800,autoplay:{delay:5e3},loop:!0,navigation:{prevEl:".mil-revi-prev",nextEl:".mil-revi-next"},breakpoints:{768:{slidesPerView:2}}}),new Swiper(".mil-services-slider",{slidesPerView:1,spaceBetween:30,speed:800,navigation:{prevEl:".mil-services-prev",nextEl:".mil-services-next"},breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}}}),new Swiper(".mil-events-slider",{slidesPerView:1,spaceBetween:30,speed:800,navigation:{prevEl:".mil-events-prev",nextEl:".mil-events-next"},breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}}}),new Swiper(".mil-courses-slider",{slidesPerView:1,spaceBetween:30,speed:800,navigation:{prevEl:".mil-courses-prev",nextEl:".mil-courses-next"},breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}}}),new Swiper(".mil-banners-slider",{slidesPerView:1,spaceBetween:30,speed:800,autoplay:{delay:5e3},effect:"fade",parallax:!0,loop:!0,pagination:{el:".mil-banners-pagination",type:"bullets",clickable:!0}}),new Swiper(".mil-box-slider",{slidesPerView:1,spaceBetween:30,speed:800,parallax:!0,effect:"fade",navigation:{prevEl:".mil-box-prev",nextEl:".mil-box-next"}}),new Swiper(".mil-tabs-slider",{slidesPerView:1,speed:800,allowTouchMove:!1,hashNavigation:{watchState:!0},effect:"fade",parallax:!0}),$(".mil-tab-buttons a").on("click",function(){$(".mil-tab-buttons a").removeClass("mil-active"),$(this).toggleClass("mil-active")}),new Swiper(".mil-tabs-slider-2",{slidesPerView:1,speed:800,allowTouchMove:!1,hashNavigation:{watchState:!0},effect:"fade",parallax:!0}),$(".mil-tabs-left-nav a").on("click",function(){$(".mil-tabs-left-nav a").removeClass("mil-active"),$(this).toggleClass("mil-active")});let l=document.getElementById("mil-file-input"),s=document.getElementsByClassName("mil-custom-file-input")[0];l.addEventListener("change",()=>{let e=l.value,[i]=e.match(/\w+.\w+$/);i.trim()&&(s.classList.add("mil-with-file"),s.innerText=i)})});

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
