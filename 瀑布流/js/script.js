//原生js方法
/*
window.onload = function(){
	waterfall('main','box');
	var dataInt={"data":[{"src":'0.jpg'},{"src":'1.jpg'},{"src":'2.jpg'},{"src":'3.jpg'},{"src":'4.jpg'},{"src":'5.jpg'}]};
	window.onscroll = function(){
		if(checkScrollSlide()){
			var oMain = document.getElementById('main');
			for(var i = 0; i < dataInt.data.length; i++){
				var oBox = document.createElement('div');
				oBox.className = 'box';
				oMain.appendChild(oBox);
				var oPic = document.createElement('div');
				oPic.className = 'pic';
				oBox.appendChild(oPic);
				var oImg = document.createElement('img');
				oImg.src = "images/"+dataInt.data[i].src;
				oPic.appendChild(oImg);
			}
			waterfall('main','box');
		}
	}
}

function waterfall(obj,cls){
	var oMain = document.getElementById(obj);
	var oBox = getByClassName(oMain,cls);
	var oScreenWidth = document.body.clientWidth || document.documentElement.clientWidth;
	var oBoxWidth = oBox[0].offsetWidth;
	// console.log(oBox.length)
	var oCol = Math.floor(oScreenWidth/oBoxWidth);
	var oArry = [];
	oMain.style.cssText = 'width:'+oBoxWidth*oCol+'px;margin: 0 auto';
	for(var i = 0; i < oBox.length; i++){
		if(i< oCol){
		oArry[i] = oBox[i].offsetHeight;
		}else{
			var minH = Math.min.apply(null,oArry);
			var index = getminHeightIndex(minH,oArry);
			// console.log(index)
			oBox[i].style.position = 'absolute'; 
			oBox[i].style.top = minH+'px';
			oBox[i].style.left = oBoxWidth*index+'px';
			oArry[index] += oBox[i].offsetHeight;
		}
	}
}

function getByClassName(obj,cls){
	var oTarget = obj.getElementsByTagName("*");
	var oBoxArr = [];
	for(var i = 0;i < oTarget.length; i++){
		if(oTarget[i].className == cls){
			oBoxArr.push(oTarget[i]);
		}
	}
	// console.log(oBoxArr.length)
	return oBoxArr;
}

function getminHeightIndex(obj,arry){
	for(var i = 0; i < arry.length; i++){
		if(obj == arry[i]){
			return i;
		}
	}
}

function checkScrollSlide(){
	var oMain = document.getElementById('main');
	var oBox = getByClassName(oMain,'box');
	var lastBoxHeight = oBox[oBox.length - 1].offsetTop+Math.floor(oBox[oBox.length - 1].offsetHeight/2);
	var scrolltop = document.body.scrollTop || document.documentElement.scrollTop;
	var clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
	if(lastBoxHeight < scrolltop + clientHeight){
		return true;
	}else{
		return false;
	}
	
}
*/

//jquery方法

$(window).on('load',function(){
	var dataInt={"data":[{"src":'0.jpg'},{"src":'1.jpg'},{"src":'2.jpg'},{"src":'3.jpg'},{"src":'4.jpg'},{"src":'5.jpg'}]};
	waterfall();
	$(window).on('scroll',function(){
		if(checkScrollSlide()){
			$.each(dataInt.data,function(key,value){
				var oBox = $('<div>').addClass('box').appendTo($('#main'));
				var oPic = $('<div>').addClass('pic').appendTo($(oBox));
				$('<img>').attr('src','images/'+$(value).attr('src')).appendTo($(oPic));
				waterfall();
			})
		}
	})
})

function waterfall(){
	var $box = $('#main>.box');
	var screenWidth = $(document).width();
	var boxWidth = $box.eq(0).outerWidth();
	var col = Math.floor(screenWidth/boxWidth);
	// $('#main').width(col*boxWidth).css('margin','0 auto');
	$('#main').css({'margin':'0 auto','width':col*boxWidth+'px'});
	var Arr = [];
	$box.each(function(index,value){
		var h = $box.eq(index).outerHeight();
		if(index < col){
			Arr[index]=h;
		}else{
			var minH = Math.min.apply(null,Arr);
			var minHindex = $.inArray(minH,Arr);
			$(value).css({
				'position':'absolute',
				'top':minH+'px',
				'left':minHindex*boxWidth+'px'
			})
			Arr[minHindex] += $box.eq(index).outerHeight();
		}
	})
}

function checkScrollSlide(){
	var $lastbox = $('#main>.box').last();
	var lastBoxHeight = $lastbox.offset().top+Math.floor($lastbox.outerHeight()/2);
	var scrolltop = $(window).scrollTop();
	var laheight =$(window).height();
	return (lastBoxHeight<scrolltop+laheight)?true:false;
}


