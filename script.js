(function(){
  var interval =3000;
  var fade_speed =1000;
  $(".fade-img-box img").hide();
  $(".fade-img-box img:first").addClass("active").show();
 
  var changeImage = function(){
    var $active = $(".fade-img-box img.active");
    var $next = $active.next("img").length?$active.next("img"):$(".fade-img-box img:first");

  $active.fadeOut(fade_speed).removeClass("active");
  $next.fadeIn(fade_speed).addClass("active");
}
 setInterval(changeImage,interval);
}());