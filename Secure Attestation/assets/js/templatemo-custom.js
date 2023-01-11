(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


	$('.owl-our-team').owlCarousel({
		items:3,
		loop:true,
		dots: true,
		nav: false,
		autoplay: true,
		margin:0,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:3
			  },
			  1600:{
				  items:3
			  }
		  }
	})
	

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);  
        }       
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });
/*
  $(document).click(function (e) {
    if ($(e.target).is('#divOne')) {
        $('#openModal').fadeOut(500);
    }

});
*/

  $(document).ready(function () {
      $(document).on("scroll", onScroll);
      $('div.main-red-button a')[0].click();
      $('#currentYear').text(new Date().getFullYear());
      var message = getUrlParameter('msg');
      if(message){
        $('p#msgString').html('<p>'+message+'</p>');
        $('div#messagePopup a')[0].click();
      }
      
      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('.scroll-to-section a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          var target = $(this.hash);
          $('html, body').stop().animate({
              scrollTop: (target.offset().top) + 1
          }, 500, 'swing', function () {
              window.location.hash = target[0].id;
              $(document).on("scroll", onScroll);
          });
      });
  });

  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.nav a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.nav ul li a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }

  function getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}



	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });


	// Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }

  $(function () {
    $('form#contact').submit(function (e) {
      $('div#cssload-main');
      $('div#messagePopup a')[0].click();
      e.preventDefault();
      $.ajax({
        type: 'post',
        url: 'email/sendEmail.php',
        data: $('form#contact').serialize(),
        success: function () {
          $('p#msgString').html('<p>Secure Attestation team will process your enquiry and will get back with details soon</p>');
          $('form#contact').trigger("reset");
        }
      });
    });

  });

  $(function () {
    $('form#getInTouchForm').submit(function (e) {
      $('div#divOne a')[0].click();
      $('div#cssload-main');
      $('div#messagePopup a')[0].click();
      e.preventDefault();
      $.ajax({
        type: 'post',
        url: 'email/sendEmail.php',
        data: $('form#getInTouchForm').serialize(),
        success: function () {
          $('p#msgString').html('<p>Secure Attestation team will process your enquiry and will get back with details soon</p>');
          $('form#getInTouchForm').trigger("reset");
        }
      });
    });

  });

})(window.jQuery);