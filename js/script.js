$(document).ready(function(){
	
	smoothScrool(1000);
	
	learnBelt();
	
	learnLoad();
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
		$('.learn-container').show();
		
	});
	
	$('.learn-return').click(function(){
		
		$('.learn-belt').css('left','0%');
		$('.learn-container').hide(800);
		
	});
	
}

function learnLoad(){
	
	$.ajaxSetup({ cache: true });
	
	$('.thumb-unit').click(function(){
		
		var newTitle = $(this).find('strong').text(),
			fileName = $(this).attr('title'),
			spinner ='<div class="loader">Loading...</div>',
			newHTML ='./learn/'+fileName+'.html';
		
		$('.project-load').html(spinner).load(newHTML);
		$('.project-title').text(newTitle);
		
	});
	
}