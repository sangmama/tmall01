// JavaScript Document

/*签到页*/
~function(){
	var popDetailOne= document.querySelector('.popDetail_one');
	var closeDetailOne= document.querySelector('.closeDetail_one');
	var oDetailOne = document.querySelector('.detail_one');
	var oPopConSign = document.querySelector('#popConSign');
	
	fnSign();
	fnSignPop()
	function fnSign(){
		if(oDetailOne){
			oDetailOne.addEventListener('touchend',function(){
				popDetailOne.style.display = 'block';											
				fnMd(oPopConSign);
					if(document.querySelector("#mScrollBd")){
					var main = document.querySelector("#mScrollBd"); 
					var navScroll = null;
					
					navScroll  = new MScroll(
						{
							element: main,
							dir: "y",
							showBar: true
						}
					);
					navScroll.backout =20;
					}
			},false)
		}
		if(closeDetailOne){
			closeDetailOne.addEventListener('touchend',function(){
				popDetailOne.style.display = 'none';											
				navScroll = null
			},false)
		}
	}
	
	function fnSignPop(){
		if( document.querySelector('#btnSign')){
			var btnSign = document.querySelector('#btnSign');
			var popResultGold = document.querySelector('#popResultGold');
			var poGoldCon = document.querySelector('#poGoldCon');
			
			var btnSign  = document.getElementById('btnSign');
                var showMonth = 7;
				var showDate = 1;
             calendar(showMonth,showDate,'today');
			/* btnSign.onclick = function(){
				 calendar(showMonth,showDate,'active');
			}*/
			
			btnSign.addEventListener('touchend',function(){
				popResultGold.style.display = 'block';											
				fnMd(poGoldCon);
				calendar(showMonth,showDate,'active');	
			},false)
		}
		if(document.querySelector('#closeResultGold')){
			var closeResultGold = document.querySelector('#closeResultGold');
			closeResultGold.addEventListener('touchend',function(){
				popResultGold.style.display = 'none';											
			
			},false)
		}
	}
	
	
}();


/*加油*/
~function(){
	var popDetailTwo= document.querySelector('.popDetail_two');
	var closeDetailTwo= document.querySelector('.closeDetail_two');
	var oDetailTwo = document.querySelector('.detail_two');
	var oPopConJia = document.querySelector('#popConJia');
	
	fnJiayou();
	//fnPop();
	
	function fnJiayou(){
		if(oDetailTwo){
			oDetailTwo.addEventListener('touchend',function(){
				popDetailTwo.style.display = 'block';	
				fnMd(oPopConJia);
			},false)
		}
		if(closeDetailTwo){
			closeDetailTwo.addEventListener('touchend',function(){
				popDetailTwo.style.display = 'none';											
			},false)
		}
	}
	
	function fnPop(){
		var popResultIs = document.querySelector('.popResultIs');
		var closeResultIs = document.querySelector('.closeResultIs');
		var jiayouResult = document.querySelector('#jiayou_Result');
		var popResultCon = document.querySelector('#popResultCon');
		if(jiayouResult){
			jiayouResult.addEventListener('touchend',function(){
				popResultIs.style.display = 'block';		
				fnMd(popResultCon);
			},false)
	   }
	   
	   if(closeResultIs){
			closeResultIs.addEventListener('touchend',function(){
				popResultIs.style.display = 'none';											
			},false)
	   }
	}
	
}();

/*金牌预言*/
~function(){
var icoDetailGold = document.querySelector('.ico_detail_gold');
var  popDetailGold = document.querySelector('.popDetailGold');
var closeDetailGold = document.querySelector('.closeDetailGold');
var popConGold = document.querySelector('.popConGold');
var popConResult = document.querySelector('.popConResult');
fnGoldDetail();
fnResult();
fnSub();

	function fnGoldDetail(){
		if(icoDetailGold){
			icoDetailGold.addEventListener('touchend',function(){
				popDetailGold.style.display = 'block';											
				fnMd(popConGold);
			},false)
		}
		if(closeDetailGold){
			closeDetailGold.addEventListener('touchend',function(){
				popDetailGold.style.display = 'none';											
			},false)
		}
	}
	
	function fnResult(){
		
			var oPopResult= document.getElementById('popResult');
				var oPopCloseResult= document.getElementById('popCloseResult');
			if( document.getElementById('gold_Result')){
				var oGoldResult= document.getElementById('gold_Result');
				 oGoldResult.addEventListener('touchstart',function(){
							oPopResult.style.display = 'block';	
							fnMd(popConResult);
							if(document.querySelector("#mScrollBdGold")){
					var mScrollBdGold = document.querySelector("#mScrollBdGold"); 
					
					var navScrollGold  = new MScroll(
						{
							element: mScrollBdGold,
							dir: "y",
							showBar: true
						}
					);
					navScrollGold.backout =20;
					}
				 },false)
			}
			
			if(oPopCloseResult){
				 oPopCloseResult.addEventListener('touchstart',function(){
							oPopResult.style.display = 'none';	
				 },false)
			}
	}
	
	
	function fnSub(){
		var goldSub =  document.querySelector('#goldSub');
		var popDetailSubmit  =  document.querySelector('.popDetailSubmit');
		var popConSubmit =  document.querySelector('.popConSubmit');
		var closeDetailSubmit =  document.querySelector('.closeDetailSubmit');
		if(goldSub){
			goldSub.addEventListener('touchend',function(){
				popDetailSubmit.style.display = 'block';											
				fnMd(popConSubmit);
			},false)
		}
		if(closeDetailSubmit){
			closeDetailSubmit.addEventListener('touchend',function(){
				popDetailSubmit.style.display = 'none';											
			},false)
		}
	}
	
}();

/*猜赛事剪影*/
~function(){
var detailJianying = document.querySelector('.detail_jianying');
var  popDetailSaishi = document.querySelector('.popDetail_saishi');
var closeDetailSaishi = document.querySelector('.closeDetail_saishi');
var popConSaishi = document.querySelector('#popConSaishi');
fnSaishi();
fnResult();
//fnQa();
	function fnSaishi(){
		if(detailJianying){
			detailJianying.addEventListener('touchend',function(){
				popDetailSaishi.style.display = 'block';											
				fnMd(popConSaishi);
			},false)
		}
		
		if(closeDetailSaishi){
			closeDetailSaishi.addEventListener('touchend',function(){
				popDetailSaishi.style.display = 'none';											
			},false)
		}
	}
	function fnResult(){
		if(document.getElementById('tabCon')){
			var tabCon = document.getElementById('tabCon');
			var aImg = tabCon.getElementsByTagName('div');
			var tabBtn = document.getElementById('tabBtn');	
			var aA = tabBtn.getElementsByTagName('a');
			for(var i=0;i<aA.length;i++){
				aA[i].index = i;
				aA[i].onclick = function(){
					for(var i=0;i<aA.length;i++){
						aA[i].className = '';
						aImg[i].style.display = 'none';
					}
					aImg[this.index].style.display = 'block';
					this.className = 'active';
				}
			}
		}
	}
	
	function fnQa(){
			
			if( document.getElementById('qaBtn')){
			var oQaBtn=  document.getElementById('qaBtn');
			 var omSignal=document.getElementById('mSignal');
			var oQqIsRight=  document.getElementById('aqIsRight');
			var oaqIsWrong=  document.getElementById('aqIsWrong');
			 oQaBtn.addEventListener('touchstart',function(){
						oaqIsWrong.style.display = 'block';	
						omSignal.style.display = 'none';	
			 },false)
			}
			
			
	}
}();

~function(){
	
	if(document.getElementById('shopTip')){
		var shopTip  =  document.getElementById('shopTip');
		var popSHop =  document.getElementById('popSHop');
		var popConShop=  document.getElementById('popConShop');
		var shopList =  document.getElementById('shopList');
		 shopTip.addEventListener('touchstart',function(){
						popSHop.style.display = 'block';	
						shopList.style.display = 'none';				 
						fnMd(popConShop);
			 },false)
		if( document.getElementById('popCloseShop')){
			var popCloseShop=  document.getElementById('popCloseShop');
			popCloseShop.addEventListener('touchstart',function(){
				popSHop.style.display = 'none';	
				setTimeout(function(){shopList.style.display = 'block';			},50)
				
			},false)
		}
		
	}
	
}();

~function(){
	if(document.getElementById('popMes')){
		var popMes = document.getElementById('popMes');
	    fnMd(popMes);
	 	if(document.getElementById('closeMes')){
			var popMesBd = document.getElementById('popMesBd');
			var closeMes = document.getElementById('closeMes');
			 closeMes.addEventListener('touchstart',function(){
						popMesBd.style.display = 'none';	
			 },false)
		}
	}
}();


/*弹出层在中间*/
function fnMd(obj){
	var height = document.documentElement.clientHeight;
	obj.style.top = (height-obj.offsetHeight)/2 +'px';
}



