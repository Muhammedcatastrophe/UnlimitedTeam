
    AOS.init({
      once: true,
      duration :1000
    });

function myFunction(x) {
    x.classList.toggle("change");
  }

/*start loading section*/
$(document).ready(function(){
  $(".loading").fadeOut(1000, function(){
    $("body").css("overflow","auto");
  });
});
  
/* end loading section*/ 

/*start btnUp*/


    $("#btnUp").css("display","none");

    // let btnOffset = $(".awesomeWeb").offset().top; 

    $(window).scroll(function(){

      let btnFadeOffset = $(window).scrollTop();
      if(btnFadeOffset > 500)
      {
        $("#btnUp").css("display","block",function(){
          $("#btnUp").fadeIn(1000);
        })
        
      }
      else
      {
        $("#btnUp").fadeOut(1000);
      }
    });

$("#btnUp").click(function(){

  $("body,html").animate({scrollTop:0}, 1500);
});
/*end btnUp*/ 



  /*start defult action whenLoad*/ 
  
  $(".leftSideBar").css("display","none");

  $(".homeToggleIcon").click(function(){

    $(".leftSideBar").css("display","block");

    $(".fixedSideBar").animate({right:"0"},400);

  });
  /*start defult action whenLoad*/ 

  /*start exit toggler*/

  $("#close-icon").click(function(){

    $(".fixedSideBar").animate({right:"-30%"},400 , function(){
      $(".leftSideBar").fadeOut(200);
    });
   
  });

  /*end exit toggler*/ 

  /*start nav offset*/ 

  // let teamOffset = $(".awesomeWeb").offset().top;
  $(window).scroll(function(){

    let scrollTop =  $(window).scrollTop();

    if(scrollTop > 810)
    {
      // animated fadeInDown
      $(".team-nav").addClass("fixed-top animated fadeInDown ");

    }
    else
    {
      $(".team-nav").removeClass("fixed-top");

    }


  })
  /*end nav offset*/


  /* start links animation forwarding*/ 
  // let aboutUs = $(".awesomeWeb").offset().top;

  // $("#aboutUsID").click(function(){

  //   $("body,html").animate({scrollTop: aboutUs}, 1500);

  // });

  // let ourServices = $(".our-services").offset().top;

  // $("#servicesID").click(function(){

  //   $("body,html").animate({scrollTop: ourServices}, 1500);

  // });
  /* end links animation forwarding*/
