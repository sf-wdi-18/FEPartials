//OLD CODE
// var tempHTML = $("#testTemp").html();
// var compiledTemp = _.template(tempHTML);
// var renderedHTML = compiledTemp();
// $("#main").html(renderedHTML);

//USING PARTIALS
$(function(){
  $.get("templates/yesOrNo.html").done(function(tempHTML){
    console.log(tempHTML);
    var compiledTemp = _.template(tempHTML);
    var renderedHTML = compiledTemp();
    $("#main").html(renderedHTML);
  });
});