$(function() {
	var n=16;
	$("#BBB").click(function(){
		$("#CON_BOX").css({
			fontSize:n+=10
		}).css({
			color:"red"
		});
		}),
	$("#MMM").click(function(){
		$("#CON_BOX").css({
			fontSize:n
		}).css({
			color:""
		});
		}),
//	$("#SSS").click(function(){
//		$("#CON_BOX").css({
//			fontSize:15
//		}).css({
//			color:""
//		});
//		})
	$("#SSS").click(function(){
		$("#CON_BOX").css({
			"color":"yellow","font-size":n-=10		
					})
					})
})