// $(function(){
//
//   $(".javascript").click(function(){
//     $(this).hide();
//     $('#javascript').show();
//   });
//
//   $("#javascript").click(function(){
//     $(this).hide();
//     $('.javascript').show();
//   });
//
//   $(".operators").click(function(){
//     $(this).hide();
//     $('#operators').show();
//   });
//
//   $("#operators").click(function(){
//     $(this).hide();
//     $('.operators').show();
//   });
// });


// $(function(){
//   $(".flashcard").click(function(){
//     $('h3', this).toggle();
//     $('p', this).toggle();
//   });

  $(function(){
    $(".flashcard").click(function(){
      $(this).children("p").toggle();
      $(this).children("h3").toggle();
    });
  });
