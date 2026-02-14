(function ($){
	"use strict";

  $(document).ready(function(){
      
   document.onkeydown = function(e) {
         if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly.
         }

         return false;   
      };

//onclick
  $('.button').on('click', function(){
    $('.branch-info').addClass('active')
  });
  
  $('.button').on('click', function(){
    $('.branch-info').removeClass('active')


  });

  //onscrooll sticky
  window.onscroll = function() {myFunction()};

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    } else {
    header.classList.remove("sticky");
    }
  }	

// scrollTop button
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
if(window.pageYOffset > 100){
toTop.classList.add("active");
}else{
toTop.classList.remove("active");
}
})

//onclick function
$(document).on('ready', function() { 
  //onclick
  var acc = document.getElementsByClassName("faq-tittle");
  var i;
  
  for(i = 0; i < acc.length; i++){
  acc[i].addEventListener("click", function(){
    
  this.classList.toggle("faq-active");
  
  var text = this.nextElementSibling;
  if(text.style.maxHeight){
    text.style.maxHeight = null;
  }
  else{
    text.style.maxHeight = text.scrollHeight + "px";
  }
  });
  }
  })
 // Search Popup
 var bodyOvrelay =  $('#body-overlay');
 var searchPopup = $('#td-search-popup');
 $(document).on('click','#body-overlay',function(e){
     e.preventDefault();
     bodyOvrelay.removeClass('active');
     searchPopup.removeClass('active');
 });
 $(document).on('click','.btn-search',function(e){
     e.preventDefault();
     searchPopup.addClass('active');
 bodyOvrelay.addClass('active');
 });

//progress bar
if($('#business').length) {
  $('#business').LineProgressbar({
    percentage:70,
    radius: '15px',
    height: '20px',
    fillBackgroundColor: '#F2A2AB'
  });
}

if ($('#investment').length) {
    $('#investment').LineProgressbar({
        percentage:80,
        radius: '15px',
        height: '20px',
        fillBackgroundColor: '#F76A7B'
    });
}

if ($('#finance').length) {
    $('#finance').LineProgressbar({
      percentage:90,
      radius: '15px',
      height: '20px',
      fillBackgroundColor: '#FE354D'
    });  

}


if ($('#bar-1').length) {
    $('#bar-1').LineProgressbar({
        percentage:90,
        radius: '15px',
        height: '10px',
        fillBackgroundColor: '#CC8809'
    });  
}

if ( $('#bar-2').length) {
    $('#bar-2').LineProgressbar({
        percentage:85,
        radius: '15px',
        height: '10px',
        fillBackgroundColor: '#CC8809'
    });  
}

if ( $('#bar-3').length) {
    $('#bar-3').LineProgressbar({
      percentage:90,
      radius: '15px',
      height: '10px',
      fillBackgroundColor: '#CC8809'
    });
}

if ( $('#bar-4').length) {
    $('#bar-4').LineProgressbar({
          percentage:80,
          radius: '15px',
          height: '10px',
          fillBackgroundColor: '#CC8809'
      });
}
    
    if ( $('#progress-1').length) {
         $('#progress-1').LineProgressbar({
        percentage:90,
        radius: '15px',
        height: '10px',
        fillBackgroundColor: '#FF6600'
        });
    }


if ( $('#progress-2').length) {
    $('#progress-2').LineProgressbar({
      percentage:80,
      radius: '15px',
      height: '10px',
      fillBackgroundColor: '#FF6600'
      });
}

if ( $('#progress-3').length) {
    $('#progress-3').LineProgressbar({
      percentage:75,
      radius: '15px',
      height: '10px',
      fillBackgroundColor: '#FF6600'
      });
}
 

if ($('.slider-1').length) {
    $('.slider-1').slick({
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:true,
    prevArrow:'<span class="prev-arrow"><i class="fas fa-long-arrow-alt-right"></i></span>',
    nextArrow:'<span class="next-arrow"><i class="fas fa-long-arrow-alt-left"></i></span>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: '0px',
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '0px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
    }); 
}

//slider

if ($('.slider-2').length) {
    $('.slider-2').slick({
dots: true,
infinite: true,
speed: 300,
slidesToShow: 3,
slidesToScroll: 3,
arrows:false,
responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
]
}); 
}

//slider
if ($('.slider-3').length) {
    $('.slider-3').slick({
dots: true,
infinite: true,
speed: 300,
slidesToShow: 1,
slidesToScroll: 1,
arrows:false,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
}); 

}


//slider
if ($('.slider-4').length) {
    $('.slider-4').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows:true,
      prevArrow:'<span class="prev-arrow"><i class="fas fa-long-arrow-alt-right"></i></span>',
      nextArrow:'<span class="next-arrow"><i class="fas fa-long-arrow-alt-left"></i></span>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      });
}
	
if ($('.slider-5').length) {
    $('.slider-5').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows:false,
        autoplay:false,
        autoplaySpeed:2000,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
    }); 
}
 
//slider

if ($('.slider-6').length) {
    $('.slider-6').slick({
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay:true,
  arrows:false,
  responsive: [
    {
      breakpoint: 1299,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 999,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });   
}
//slider
if ($('.testimonial-slider').length) {
  $('.testimonial-slider').slick({
dots: true,
infinite: true,
speed: 300,
slidesToShow: 1,
slidesToScroll: 1,
arrows:false,
rtl: false,
vertical: true,
responsive: [
{
  breakpoint: 1024,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  }
},
{
  breakpoint: 600,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1
  }
},
{
  breakpoint: 480,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1
  }
}
]
}); 

}

//counter-number
if ($('.counter').length) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
}


//animation
AOS.init({
  offset: 300,
  duration: 1000,
    disable: function() {
      var maxWidth = 768;
      return window.innerWidth <= maxWidth;
    }

});


if ($('#play-btn').length) {
    $('#play-btn').magnificPopup({
        type:'iframe',
        removalDelay: 260,
        mainClass: 'mfp-zoom-in',
        iframe:{
        patterns:{
            youtube:{
              index: 'youtube.com/',
              id: 'v=', 
              src: 'http://www.youtube.com/embed/%id%?autoplay=1' ,
            },
        },
        srcAction: 'iframe_src', 
        }

    });
}


if ($('#play-btn-2').length) {
    $('#play-btn-2').magnificPopup({
        type:'iframe',
        removalDelay: 260,
        mainClass: 'mfp-zoom-in',
        iframe:{
        patterns:{
            youtube:{
              index: 'youtube.com/',
              id: 'v=', 
              src: 'http://www.youtube.com/embed/%id%?autoplay=1' ,
            },
        },

        srcAction: 'iframe_src', 
        }

    });
}

if( $('.chart').length ) {
    $('.chart').easyPieChart({
    //your options goes here
    easing:"eayInOut",
    barColor:"#FF5E15",
    trackColor:"#F2F3F6",
    scaleColor:false,
    lineWidth:10,
    lineCap:'square',
    size:180,
    animate:3000,
    onStep:function(from, to, parcent){
        $(this.el).find(".parcent").text(Math.round(parcent));  
    },
    });
}

    if ($('.testimonial-slider-for-2').length) {
          $('.testimonial-slider-for-2').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            fade: true,
            dots: true,
            arrows: false,
            asNavFor: '.testimonial-slider-nav-2'
        });
    }
  
    if ($('.testimonial-slider-nav-2').length) {

        $('.testimonial-slider-nav-2').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            centerMode: true,
            centerPadding: 0,
            asNavFor: '.testimonial-slider-for-2',
            dots: false,
            arrows: false,
            focusOnSelect: true,
        });
    }


    if ($('a[data-slide]').length) {
        $('a[data-slide]').click(function(e) {
            e.preventDefault();
            var slideno = $(this).data('slide');
            $('.testimonial-slider-nav-2').slick('slickGoTo', slideno - 1);
        });
    }

    if ($('.offer-tab').length) {
        $('.offer-tab').on('click', function() {
            var target = $(this).data('offer');
            $('.offer-tab').removeClass('active');
            $(this).addClass('active');
            $('.offer-panel').removeClass('active');
            $('.offer-panel[data-offer-panel="' + target + '"]').addClass('active');
        });
    }

      
});

//preloader
  $(window).on('load', function () {
    $('#preloader').delay(300).fadeOut(500);

  });


//form validation
var contactForm = document.forms['contact-form'];
var warning = document.querySelector('#warning');

if (typeof contactForm !== 'undefined') {
  contactForm.onsubmit = function(event){
    event.preventDefault();
    warning.innerHTML = 'Submitted Successfully!';
  }
}


})(jQuery);
