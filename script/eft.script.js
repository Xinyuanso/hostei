
$(document).ready(function () {
	
   $("footer").css({
            'top' : $('.nav-1').outerHeight() + $('.nav-2').outerHeight()  + 'px' 
        });
	
	$(window).resize(function() {

 $("footer").css({
            'top' : $('.nav-1').outerHeight() + $('.nav-2').outerHeight()  + 'px' 
        });
	
});
	
	
	var vid =document.getElementById("idle_video");
setTimeout(function(){
		if(vid.paused){
	vid.setAttribute("controls","");
	}else{
		
	vid.removeAttribute("controls");
		}

	 
	 }, 500);
	 
	
	vid.onplaying = function(){
	vid.removeAttribute("controls");};
document.getElementById("navc").classList.toggle("nav-ban-container");	
var movementStrength = 15;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$(".nav-1-run-pic").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() );
          var pageY = e.pageY - ($(window).height() );
          var newvalueX = width * pageX * -5+25;
          var newvalueY = height * pageY * -1 + 50;
          $('.nav-1-run-pic').css("background-position", newvalueX+"px     "+newvalueY+"px");
          $('.nav-1-run-pic').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
$(".skip-btn").click(function () {
onVideoEnded();
});
  $('.nav-1-btn').click(function(e) {
    e.preventDefault();
  $('html, body').animate({
    scrollTop: $(".nav-2").offset().top  }, 1500);
});

var ready = 0;
$(document).scroll(function(){ 
	var x=window.pageYOffset; 
	var na = $( ".nav-2" );
	var off = na.offset().top;
	var d =off-20;
	$('#navc').toggleClass("nav-ban-container-active",(x>=d));
	if(x >= d){
	document.getElementById("navc-pic").setAttribute("src","sub/logo-old.png");
		}else{
	document.getElementById("navc-pic").setAttribute("src","sub/logo.png");
			}
var y= $(".nav-2").offset().top;
var yz = 1- x/777;
	if(x<=y){
$(".nav-1-overlay").css("opacity", yz);
	}

});


});



function onVideoEnded(){
	$(".skip-btn").hide();
	$('video')[0].pause();
	$(".motion-container").show();
        $( ".motion-container" ).animate({opacity: 1}, 2000, function() {
	  	$(".video-container").hide();
	        setTimeout(del, 2000);
  });
 }

function del(){
	var preloader = document.getElementById("pre-loader");
	var nav = document.getElementById("navc");
	var nav2 = document.getElementById("nav-1");
	var nav3 = document.getElementById("nav-2");
	nav.style.display="flex";
	nav2.style.display="block";
	nav3.style.display="block";

	$( ".motion-container" ).animate({
   opacity: 0 
  }, 1000, function() {
	     preloader.remove();
  });
			
}
