// This code highlights the term and makes the definition appear below. When you click a new term, that definition appears instead
$(function() {
 $(".javascript").click(function() {


   $(".col-md-3").removeClass("highlight");
   $(".definition p").hide();
   $("#javascript").show();
   $(".javascript").addClass("highlight");
 });

 $(".variable").click(function() {
   $(".col-md-3").removeClass("highlight");
   $(".definition p").hide();
   $("#variable").show();
   $(".variable").addClass("highlight");
 });
});
