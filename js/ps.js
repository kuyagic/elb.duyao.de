function release(){
$("a[href^='https://www.pubstorm.com/']").each(
	function(a,b){
		$(b).remove();
	}
);
$("script")[$("script").length - 1].remove();
}

$(function(){
release();
});
