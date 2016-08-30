$(function(){
//  添加hot图标
	$("#news .promoted").append('<span class="hot"></span>');
//	东西部战绩切换
	$(".tab a").mouseover(function(){
		$(this).attr('class','page_on').siblings().attr('class','page_off');
		var temp='.'+$(this).attr('id');
		$(temp).removeClass('hide');
		$(temp).siblings().addClass('hide');
	});
//	图片滑动效果
	var $imgrolls = $("#imageroll div span");
	$("#imageroll div span:not(.chos)").css("opacity","0.7");
	var len = $imgrolls.length;
	var index = 0;
	var timer = null;
	$imgrolls.mouseover(function(){
		index = $(this).index();
		showImg(index);
	}).eq(0).mouseover();
	$("#imageroll").hover(function(){
		if(timer){
			clearInterval(timer);
		}
	},function(){
		timer = setInterval(function(){
			showImg(index);
			index++;
			if(index == len){index = 0;}
		},5000);
	});
	
//  精彩图集
	$("#starsTab li span").click(function(){
		var index = $('#starsTab li span').index(this);
		$(this).parent().addClass('chos').siblings().removeClass('chos');
		showImgList(index);
		return false;
	}).eq(0).click();
	
	
	
});
//  图片滑动函数
function showImg(index){
	$rollobj = $("#imageroll");
	$rolllist = $rollobj.find("div span");
	$rollobj.find('img').eq(index).stop(true,true).fadeIn().siblings().fadeOut();
	$rolllist.removeClass("chos").css("opacity",'0.7')
			 .eq(index).addClass("chos").css("opacity","1");
}

function showImgList(index){
	var rollWidth = $("#imgList").find('li').outerWidth()*4;
	$("#imgList").stop(true,false).animate({left:-rollWidth*index},1000);
	
}
