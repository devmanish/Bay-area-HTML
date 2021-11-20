$(document).ready(function(){
	$("a.allPageInfoBtn").click(function(){
    $( this ).toggleClass( "open" );
		$("div.allPageInfoCont").slideToggle(300);
	})


	$('.first-button').on('click', function () {
		$('.animated-icon1').toggleClass('open');
	});
	$('.second-button').on('click', function () {

		$('.animated-icon2').toggleClass('open');
	});
	$('.third-button').on('click', function () {

		$('.animated-icon3').toggleClass('open');
	});


});

$(document).ready(function(){
	$("button.navbar-toggler").click(function(){
    $( this ).toggleClass( "open" );
		$("div.mainMenu").slideToggle(300);
	})
})


$(document).on("mobileinit", function(){
      $.mobile.ignoreContentEnabled = true;
});

$(document).ready(function(){

/* set data-ajax="false" to all a nchor in page */
$("a, .navbar-toggler ").attr("data-ajax","false");


	$(".retrunToTop").on("click", function() {
	    $("html,body").animate({ scrollTop: 0 }, "slow");
	});


});


Splitting();
ScrollOut({
	once: true,
});