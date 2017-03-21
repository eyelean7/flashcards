$(function() {
 $(".javascript").click(function() {

   //$(".flashcard .col-md-3").removeClass();


   $(".definition p").hide();
   $("#javascript").show();
   $(".javascript").addClass("highlight");
 });

 $(".variable").click(function() {

   $(".definition p").hide();
   $("#variable").show();
   $(".variable").addClass("highlight");
 });


  // $(".definition p").click(function() {
  //   (this).toggle();
  // });

});
