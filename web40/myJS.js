$(function(){
	$("#RRR").click(
		function(){
			$("#KIDS").removeClass("ABC"),
			$("#KIDS").animate({left:"1000"},800)
		}
	),
	$("#LLL").click(
		function(){
//			$("#KIDS").animate({left:"0"},800)
			$("#KIDS").addClass("ABC")
		})
})
