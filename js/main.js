// $(document).ready(function(){
//     $("#slider").owlCarousel();
//   });


//   $(function() {
//     // Owl Carousel
//     var owl = $(".owl-carousel");
//     owl.owlCarousel({
//       items: 6,
//       margin: 10,
//       loop: true,
//       nav: true
//     });
//   });

// $(function() {
//         var owl = $(".owl-carousel");
//         owl.owlCarousel({
//         navigation : true, // Show next and prev buttons
//         slideSpeed : 300,
//         paginationSpeed : 400,
//         singleItem:true
//     });  
//   });


  

$(function() {
        var owl = $(".owl-carousel");
        owl.owlCarousel({
        // items: 3,
        singleItem: true,
        slideSpeed: 200,
        autoPlay: true,
        autoPlay : 5000, 
        stopOnHover: true,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        // navigation : true,
        // navigationText : ["prev","next"],
        // rewindNav : true,
        // scrollPerPage : false,

        mouseDrag : true,
        touchDrag : true,

    });

      $(".arrow_btn_forward").click(function(){
        owl.trigger('owl.next');
      })
      $(".arrow_btn_back").click(function(){
        owl.trigger('owl.prev');
      })
   
  });



    

  