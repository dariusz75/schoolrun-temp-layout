$(document).ready(function () {
      var trigger = $('.hamburger'),
      isClosed = false,
      sidebarWidth = 70;

    trigger.click(function () {
      hamburger_cross();      
    });


$('.whole-page-column').css({top: 0, left: 90, position:'fixed'})

    function hamburger_cross() {

      if (isClosed == true) {          
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }

  
  $('[data-toggle="offcanvas"]').click(function () {
        
        $('#wrapper').toggleClass('toggled');

        if($('#wrapper').hasClass('toggled')){          
          $('.side-nav-column').removeClass( "col-lg-1");
          $('.whole-page-column').removeClass( "col-lg-11");
          $('.side-nav-column').addClass( "col-lg-2");
          $('.whole-page-column').addClass( "col-lg-10");
          $('#sidebar-wrapper').width($('#wrapper').width());
          $('.whole-page-column').css({top: 0, left: $('.side-nav-column').width()+20, position:'fixed'})
        } else {
          $('.side-nav-column').removeClass( "col-lg-2" ).addClass( "col-lg-1");
          $('.whole-page-column').removeClass( "col-lg-10" ).addClass( "col-lg-11");
          $('#sidebar-wrapper').width(sidebarWidth);
          $('.whole-page-column').css({top: 0, left: 90, position:'fixed'})
        }

  });  


   $('.sidebar-nav').hover(function () {

        $('#wrapper').toggleClass('toggled');

        if($('#wrapper').hasClass('toggled')){          
          $('.side-nav-column').removeClass( "col-lg-1");
          $('.whole-page-column').removeClass( "col-lg-11");
          $('.side-nav-column').addClass( "col-lg-2");
          $('.whole-page-column').addClass( "col-lg-10");
          $('#sidebar-wrapper').width($('#wrapper').width());
          $('.whole-page-column').css({top: 0, left: $('.side-nav-column').width()+20, position:'fixed'})
        } else {
          $('.side-nav-column').removeClass( "col-lg-2" ).addClass( "col-lg-1");
          $('.whole-page-column').removeClass( "col-lg-10" ).addClass( "col-lg-11");
          $('#sidebar-wrapper').width(sidebarWidth);
          $('.whole-page-column').css({top: 0, left: 90, position:'fixed'})
        }

  }); 
  

  $(".dropdown-toggle").dropdown();





});