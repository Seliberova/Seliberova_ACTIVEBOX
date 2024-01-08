new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }, 
});

    $('.navigation_header').click(function(event){
        $('.navigation_header,.navigation_header_menu,.main,.fa-xmark,.fa-bars').toggleClass('active');
    });

