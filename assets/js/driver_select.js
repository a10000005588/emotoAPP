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

function setCookie(c_name,value,expiredays){
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+expiredays)
	document.cookie=c_name+ "=" +escape(value)+
	((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}
function select(){
	window.location.replace("order.html");  
	setCookie('driver',this.value,365,"/");
	x = getCookie('driver');
	console.log(x);
}

function open_comment(id)
{
	$(".comment"+id).css("display","block");
	$(".show_comment"+id).css("display","none");
}

function close_comment(id)
{
	$(".comment"+id).css("display","none");
	$(".show_comment"+id).css("display","block");
}

jQuery(document).ready(function($) {
	

	

	$.ajax({
			type:'get',
			url:'http://127.0.0.1:8000/api/driver',
			success:function(res){
				console.log(res);
				//生成列表
				var list = '';
				for (let i = 0 ; i < res.length ; i++) {
					
					$.ajax({
						type:'get',
						url:'http://127.0.0.1:8000/api/driver/comment/' + res[i].driverAddress,
						success:function(res2){
							
							var str = '';
							
							for(var i2=0;i2<res2.count;i2++)
							{
								str = str + '<li>\
												<div class="ui-list-img-square">\
													<img style="width: 85%;" src="assets/i/comment.png">\
												</div>\
												<div class="ui-list-info ui-border-t">\
													<h4 class="ui-nowrap">乘客評價' + i2 + '</h4>\
													<p class="ui-nowrap">' + res2.data[i2].comment + '</p>\
												</div>\
											</li>';
							}
							
							if(str.length <= 1)
							{
								str = '<li>\
											<div class="ui-list-img-square">\
												<img style="width: 85%;" src="assets/i/comment.png">\
											</div>\
											<div class="ui-list-info ui-border-t">\
												<h4 class="ui-nowrap">尚無評價</h4>\
												<p class="ui-nowrap"></p>\
											</div>\
										</li>';
							}
							var nickName = "優秀司機"
							var score = Math.round(res[i].credit);
							switch(score) {
								case 0: nickName = "劣質司機"; break;
								case 1: nickName = "不太優司機"; break;
								case 2: nickName = "普通司機"; break;
								case 3: nickName = "普通司機"; break;
								case 4: nickName = "特優司機"; break;
								case 5: nickName = "五星司機"; break;
							}
							
							var div = 	'<section class="panel">\
											<ul class="ui-row">\
												<li class="ui-col ui-col-45">\
													<h3 class="b-2c" style="margin:10px 0 5px 0;">' + res[i].plate + '</h3>\
													<h3 class="r-ac">Gogoro 2 水漾藍</h3>\
												</li>\
												<li class="ui-col ui-col-40">\
													<img style="width: 85%;" src="assets/i/driver.png">\
												</li>\
												<li class="ui-col ui-col-15">\
													<h3 class="r-2c" style="margin-top: 5px;">' +　res[i].driverName　+ '</h3>\
													<h3 class="r-2c" style="margin-top: 5px;">信用:' + res[i].credit + '</h3>\
													<h3 class="tag TG">'+nickName+'</h3>\
												</li>\
												<li class="ui-col ui-col-100 border_bottom"></li>\
												<li class="ui-col ui-col-50 b-2c">距離1.2km | 4分鐘到達</li>\
												<li class="ui-col ui-col-25 r-2c text-right show_comment' + i + '" onclick="open_comment(' + i + ')">查看詳情</li>\
												<li class="ui-col ui-col-25 r-2c text-right comment' + i + ' hid_comment' + i + '" style="display: none;" onclick="close_comment(' + i + ')">收起</li>\
												<li class="ui-col ui-col-25 r-2c text-right show_detail" plate="' + res[i].plate +'" address="' + res[i].driverAddress +'" name="' + res[i].driverName +'" credit="'+res[i].credit+'">選擇司機</li>\
												<li class="ui-col ui-col-100 border comment' + i + '" style="margin: 20px 0;display: none;">\
													<ul class="ui-list ui-border-tb ">' + str + '</ul>\
												</li>\
											</ul>\
										</section>';
										
										
							list += div;	
							$('#list').html(list);
							
							$(".show_detail").click(function(){
								var driver=new Array();
								driver[0] = this.getAttribute("address");
								driver[1] = this.getAttribute("name");
								driver[2] = this.getAttribute("plate");
								driver[3] = this.getAttribute("credit");
																
								localStorage.setItem("address", driver[0]);
								localStorage.setItem("name", driver[1]);
								localStorage.setItem("plate", driver[2]);
								localStorage.setItem("credit", driver[3]);

								setCookie('driver',driver,365,"/");
								x = getCookie('driver');
								console.log(x);
								window.location.href="order.html"; 
							});
							
						}
					});
					
				};
				
				
			}
	});

});