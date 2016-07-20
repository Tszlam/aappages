$(document).ready(function(){
	nav();
	footer();
	
	
/*****************/

	function nav(){
		$("body").append('<nav id="nav" class="container"><a href="index.html" class="btn btn-primary btn-lg col-md-1 col-xs-4">首页</a><a href="exhibit.html" class="btn btn-primary btn-lg col-md-1 col-xs-4">小动物</a><a href="rear.html" class="btn btn-primary btn-lg col-md-1 col-xs-4">关于我们</a><nav>');
		var id = $("html").attr("id");
		$('[href*="'+id+'"]').addClass("disabled");
	}
	function footer(){
		$("#main").append('<footer id="footer" class="row text-center"><h1>--欢迎使用--</h1><footer>');
	}
});