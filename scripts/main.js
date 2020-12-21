new WOW().init();

$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 1500,
  centerMode: true,
  variableWidth: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  // swipeToSlide: true,

  responsive: [
    {
      breakpoint: 500,
      settings: {
        
      }
      
    },

  ]
});


const marker = new IntersectionObserver(function(entries) {
 
  if (entries[0].intersectionRatio > 0){
    
    $('head').append('<style>.custBef:before{width:250px !important;}</style>');
  }
 
});
marker.observe(document.querySelectorAll('.col__info-text')[0]);





function burgerDrop(){

let burgerHeight = document.querySelector('.burger__menu'),
    // li = document.querySelectorAll('.burger__menu li');
    nav = document.querySelector('.burger__menu nav')


  $('.burger').click(()=>{

    if(burgerHeight.style.height == '' || burgerHeight.style.height == '0px'){
      nav.style.display = 'block'
      burgerHeight.style.height = 250 + 'px'

    }
  
    else{
      burgerHeight.style.height = 0 + 'px'

    }
  })

  $('.burger__menu li').click(()=>{
    burgerHeight.style.transition = 0.3 + 's'
    burgerHeight.style.height = 0 + 'px'
  })

}

burgerDrop();

function smoothScroll(){
  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
}


smoothScroll();


if(window.innerWidth < 1000){
 $('.stuff__block').removeClass('wow')
}