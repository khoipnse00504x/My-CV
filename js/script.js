$(document).ready(function(){
	
	smoothScrool(1000);
	
	learnBelt();
	
});

function smoothScrool(duration){
	$('a[href^="#"]').on('click',function(event){
		
		var target= $( $(this).attr('href') );
		
		if(target.length){
			event.preventDefault(); //chống load lại trang web
			
			$('html,body').animate({
				scrollTop: target.offset().top
			}, duration);
		}
		
	});
}

function learnBelt(){
	
	$('.thumb-unit').click(function(){
		
		$('.learn-belt').css('left','-100%');
		
	});
	
	$('.learn-return').click(function(){
		
		$('.learn-belt').css('left','0%');
		
	});
	
}