$(document).ready(function(){

	var WindowHeight = $(window).height();
	$("#full").css("height", WindowHeight);
	$(window).on('resize', function(event){
		var rWindowHeight = $(window).height();

		$("#full").css("height", rWindowHeight);


	});




});

function mobileButtons(){
	// STOP POINT 11/27
	$(".row.border.mobileTitle").on('click', function(event){
		var father = $(this).parent();
		if(!father.hasClass("active")){

		}else{

		}

	});

}