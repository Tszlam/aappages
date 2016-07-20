$(document).ready(function(){
	var num = 12;
	$("#footer").before('<div class="row"></div>');
	var row =$('#main').find(".row").first();
	for (var i=0;i<num;i++) {
		$(row).append('<div class="col-md-3 col-xs-12 pic"></div>');
	}
	$(".pic").each(function(index){
		$(this).attr("data-no",index+1);
		$(this).append('<img src="img/'+(index+1)+'.jpg" alt="这是一只可爱的小动物" />');
	});
	$(row).on("click",".pic",function(){
		$("body").append('<div id="mask"></div>');
		$("#mask").after('<div id="mask_form"><div id="end"></div><h1 class="text-center">这是第'+$(this).data("no")+'张图</h1><div>');
//		console.log();
		$("#end").on("click",function(){
			$("#mask").remove();
			$("#mask_form").remove()
		});
		$("#mask").on("click",function(){
			$(this).remove();
			$("#mask_form").remove()
		});
	})
});