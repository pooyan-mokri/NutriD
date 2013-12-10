// JavaScript Document
$(function() {
	var pull 		= $('#pull');
		menu 		= $('nav ul');
		slogan      = $('#Stage');
		menuHeight	= menu.height();
		dropDownMenu = $('.has-dropdown');
		responsiveDropdown();
		
	function responsiveDropdown() {
	if (window.matchMedia("(max-width: 979px)").matches){
		$(dropDownMenu).on('click',function(e){
		e.preventDefault();	
		$(dropDownMenu).css('height',160);
		$('.dropdown').css('visibility','visible');
		});	 
	//for mobile
	}else{
    $(dropDownMenu).on('mouseenter',function(e) {	
		e.preventDefault();
		$('.dropdown').stop(false,true).slideDown();
		$(this).css('height',60);
	});
	
	$(dropDownMenu).on('mouseleave',function(e) {	
		e.preventDefault();
		$('.dropdown').stop(false,true).slideUp();
		$(this).css('height',25);
	});
	
	}
	}

	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
		slogan.toggle("slow");
	});
});



//refresh page on browser resize
$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 200);
});

$(window).resize(function(){ 
 
    var w = $(window).width();  
    if(w > 320 && menu.is(':hidden')) {  
        menu.removeAttr('style'); 	   
    }  
});  