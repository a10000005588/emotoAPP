jQuery(document).ready(function($) {
	$(".show_detail").click(function(){
		$(".detail").css("display","block");
		$(".show_detail").css("display","none");
	});
	$(".hid_detail").click(function(){
		$(".detail").css("display","none");
		$(".show_detail").css("display","block");
	});
});