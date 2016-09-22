$(document).ready(function () {
      var trigger = $('.hamburger'),
      isClosed = false,
      sidebarWidth = 70,
      testValue = 900;

    trigger.click(function () {
      hamburger_cross();      
    });

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
          $('.top-bar').css('padding-left', '15%');
        } else {
          $('.side-nav-column').removeClass( "col-lg-2" ).addClass( "col-lg-1");
          $('.whole-page-column').removeClass( "col-lg-10" ).addClass( "col-lg-11");
          $('#sidebar-wrapper').width(sidebarWidth);
          $('.top-bar').css('padding-left', sidebarWidth);
        }

  });  


  $('.nav-hover').hover(function () {

        $('#wrapper').toggleClass('toggled');

        if($('#wrapper').hasClass('toggled')){          
          $('.side-nav-column').removeClass( "col-lg-1");
          $('.whole-page-column').removeClass( "col-lg-11");
          $('.side-nav-column').addClass( "col-lg-2");
          $('.whole-page-column').addClass( "col-lg-10");
          $('#sidebar-wrapper').width($('#wrapper').width());
          $('.top-bar').css('padding-left', '15%');
        } else {
          $('.side-nav-column').removeClass( "col-lg-2" ).addClass( "col-lg-1");
          $('.whole-page-column').removeClass( "col-lg-10" ).addClass( "col-lg-11");
          $('#sidebar-wrapper').width(sidebarWidth);
          $('.top-bar').css('padding-left', sidebarWidth);
        }

  });  

  $(".dropdown-toggle").dropdown();
});