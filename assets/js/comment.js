function pay(){  
		   $(".ui-loading-block.ing").css("display","none");
		   $(".success").css("display","-webkit-box");  
		   setTimeout('load2()',1000);
		   
		};
function link(){
	
};

function load2()
{  
	$(".ui-loading-block.show").css("display","none");
	$(".ui-loading-block.success").css("display","none");
	$(".ui-loading-block.ing").css("display","none");
	$(".absolute-panel2").css("display","none");
	$(".absolute-panel3").css("display","block");
	$(".absolute-panel3").animate({bottom:"0"}); 
};

jQuery(document).ready(function($) {
	$(".comment-submit").click(function(){
		$(".ui-loading-block.ing").css("display","-webkit-box");

		setTimeout('pay()',2000);
		setTimeout('link()',2000);
		var payment = new Array();
		payment[0] = "0x45c78ec57a6590ac0c1d414963574c6f53310875";
		payment[1] = "Ken";
		payment[2] = "";
		payment[3] = "";
		payment[4] = "0.0018";
		payment[5] = "3";
		var jsonpayment = {
			"driverAddress": localStorage.getItem("address"),
		    "driverName": "王大陸",
		    "userName": "王小明",
		    "userAddress": "0x0a68808f5803882e69e66804c75172c873a09f24",
		    "fee": 0.15,
		    "credit" : 5,
			"comment": document.getElementById("mycomment").value
		};
		console.log(jsonpayment);

		 $.ajax({
                cache:false,//保留缓存数据
                type:"POST",//为post请求
                url:"http://127.0.0.1:8000/api/driver/" + localStorage.getItem("address") + "/payment/user/0xb0053b95ade277c80c8cf178f4add339a51373bc",
                data:jsonpayment,
                async:false,//设置成true，这标志着在请求开始后，其他代码依然能够执行。如果把这个选项设置成false，这意味着所有的请求都不再是异步的了，这也会导致浏览器被锁死
                error:function(request){//请求失败之后的操作
                	console.log("failed");
                    return;
                },
                success:function(data){//請求成功之后的操作
                    console.log("success");
					console.log(data);
					
					document.getElementById("tx_return").innerHTML = data.transactionReceipt;
					document.getElementById("tx_money").innerHTML = data.fee + " mETH";
					document.getElementById("tx_comment").innerHTML = data.comment;
					
                }
            });
	});

	$(".star li").click(function () {
	    var k = $(".star li").index(this);
	    for (var i = 0; i < k+1; i++) {
	    	$(".star li").eq(i).html('<img style="width: 44px;" src="assets/i/fullstar.png">');
	    }
	    for (var i = k+1; i < 5; i++) {
	    	$(".star li").eq(i).html('<img style="width: 44px;" src="assets/i/star.png">');
	    }
	 });
});