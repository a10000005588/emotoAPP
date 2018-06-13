function getCookie(c_name){
	if (document.cookie.length>0)
	  {
	  c_start=document.cookie.indexOf(c_name + "=")
	  if (c_start!=-1)
	    { 
	    c_start=c_start + c_name.length+1 
	    c_end=document.cookie.indexOf(";",c_start)
	    if (c_end==-1) c_end=document.cookie.length
	    return unescape(document.cookie.substring(c_start,c_end))
	    } 
	  }
	return ""
}
function load(){  
			$(".ui-loading-block.show").css("display","none");
			$(".absolute-panel").css("display","none");
			$(".absolute-panel2").css("display","block");
			$(".absolute-panel2").animate({bottom:"0"}); 
		};
function link(){
	window.location.replace("comment.html");
};
jQuery(document).ready(function($) {
	x = getCookie('driver');
	console.log(x);
	var m = x.split(",");
	console.log(m);
	var list = '<ul class="ui-row">\
	                <li class="ui-col ui-col-45">\
	                    <h3 class="b-2c" style="padding: 36px 0 3px 18px;">' + localStorage.getItem("plate") + '</h3>\
	                    <h3 class="r-ac"  style="padding-left: 18px;">Gogoro 2 水漾藍</h3>\
	                </li>\
	                <li class="ui-col ui-col-40" style="padding-top: 16px;margin-left:-15px;">\
	                    <img style="width: 85%;" src="assets/i/driver.png">\
	                </li>\
	                <li class="ui-col ui-col-15" style="padding-top: 24px;">\
						<h3 class="r-2c" style="margin-top: 5px;">' + localStorage.getItem("name") + '</h3>\
						<h3 class="r-2c" style="margin-top: 5px;">信用: ' + localStorage.getItem("credit") + '</h3>\
	                    <h3 class="tag TG">優秀司機</h3>\
	                </li>\
	                <li class="ui-col ui-col-100 border_bottom"></li>\
	                <li class="ui-col ui-col-33 small text-center">發消息</li>\
	                <li class="ui-col ui-col-33 small text-center">打電話</li>\
	                <li class="ui-col ui-col-33 small text-center">聯繫客服</li>\
	                <li class="ui-col ui-col-100 border_bottom"></li>\
					<div class="preview">\
						<h1 class="price text-center">0.15</h1>\
	                </div>\
	            </ul>\
	            <div class="button pay">\
	                <button class="ui-btn-lg-nowhole ui-btn-primary">立即支付</button>\
	            </div>';

	$('#list').html(list);

	$(".pay").click(function(){
		$(".ui-loading-block.show").css("display","-webkit-box");
		setTimeout('load()',2000);
	});


	
});