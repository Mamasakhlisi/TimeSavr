$('.owl-carousel').owlCarousel({
    loop:true,
    dots:false,
    autoplay:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
});

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    setTimeout(() => {
        loader.className += " hidden"; // class "loader hidden"        
    }, 1000);

});