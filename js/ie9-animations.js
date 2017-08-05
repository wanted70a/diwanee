$(document).ready(function(){
	
	/*NAVIGACIJA LINKOVI*/
	$('.nav-link').hover(
		function() {
			$(this).stop().animate({color:'#c41230'}, 300);
        },
		function () {
			$(this).stop().animate({color:'#222222'}, 300);
		}
	);
	
	/*TABLET AND MOBILE NAV*/
	$('.mobile-nav .nav-link').hover(
		function() {
			$(this).stop().animate({color:'#c41230'}, 300);
        },
		function () {
			$(this).stop().animate({color:'#cccccc'}, 300);
		}
	);
	
	
	//DUGME ZA PRIJAVU NA POSAO
	$('.prijava').hover(
		function() {
			$(this).stop().animate({backgroundColor:'#535353', color:'#fff',borderColor:'#535353'}, 300);
        },
		function () {
			$(this).stop().animate({backgroundColor:'#fff',color:'#535353',borderColor:'#222222'}, 300);
		}
	);
	
	$('.job:nth-child(odd) .prijava').hover(
		function () {
			$(this).stop().animate({backgroundColor:'#fff',color:'#535353'}, 300);
		},
		function() {
			$(this).stop().animate({backgroundColor:'#222222', color:'#fff'}, 300);
        }
	);
	
	//LOAD MORE DUGME
	$('.load-more').hover(
		function() {
			$(this).stop().animate({backgroundColor:'#c41230', color:'#eeeeee'}, 300);
        },
		function () {
			$(this).stop().animate({backgroundColor:'#eeeeee',color:'#333333'}, 300);
		}
	);
	
	//SCALE
	$('.grow').hover(
		function () {
			$(this).stop().animate({width:'+=6', height:'+=6'}, 300);
		},
		function() {
			$(this).stop().animate({width:'64', height:'64'}, 300);
        }
	);
});



/*
.nav-link{
	transition: color .4s ease;
	-moz-transition: color .4s ease;
	-ms-transition: color .4s ease;
	-webkit-transition: color .4s ease;
}
.nav-link:hover{
	color:#c41230
}   

*/