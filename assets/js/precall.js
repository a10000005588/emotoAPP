function load(){  
		   window.location.replace("driver_select.html");  
		};
jQuery(document).ready(function($) {
	$(".call").click(function(){
		$(".ui-loading-block.show").css("display","-webkit-box");

		setTimeout('load()',2000);
		
	});
	
});