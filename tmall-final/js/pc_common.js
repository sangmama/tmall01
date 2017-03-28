// JavaScript Document

/*签到*/
~function(){
	if(getByClass(document, "signalDetail", "a" )){
		var signalDetail = getByClass(document, "signalDetail", "a" );
		var  popLayerSign= document.getElementById('popLayerSign');
		var  popSign= document.getElementById('popSign');
		 signalDetail[0].onclick = function(){
			popLayerSign.style.display = 'block';
			popSign.style.display = 'block';
		}
	}
	if(document.getElementById('signClose')){
		var  signClose= document.getElementById('signClose');
		 signClose.onclick = function(){
			popLayerSign.style.display = 'none';
			popSign.style.display = 'none';
		}
	}
}();

/*中国队加油*/
~function(){
	//var btnJiayou = document.getElementById('btnJiayou');
	
	fnJiayouDetail();
	fnQuanIs();
	
	function fnJiayouDetail(){
		if(getByClass(document, "acDetailJiayou", "a" )){
		var acDetailJiayou = getByClass(document, "acDetailJiayou", "a" );	
		var popLayerJia = getByClass(document, "popLayerJia", "div" );	
		var popDetailJia=  document.getElementById('popDetailJia');
			 acDetailJiayou[0].onclick = function(){
				popLayerJia[0].style.display = 'block';
				popDetailJia.style.display = 'block';
			}
		}
		if( document.getElementById('popCloseQuan')){
			var popCloseQuan = document.getElementById('popCloseQuan');
			 popCloseJia.onclick = function(){
				popLayerJia[0].style.display = 'none';
				popDetailJia.style.display = 'none';
			}
		}
	}
	
	function fnQuanIs(){
		if( document.getElementById('btnJiayouQuan')){
			var btnJiayouQuan = document.getElementById('btnJiayouQuan');
			var popQuan = document.getElementById('popQuan');
				var popLayerJia = getByClass(document, "popLayerJia", "div" );	
			 btnJiayouQuan.onclick = function(){
				popLayerJia[0].style.display = 'block';
				popQuan.style.display = 'block';
			}
		}
		if( document.getElementById('popCloseJia')){
			var popCloseJia = document.getElementById('popCloseJia');

			 popCloseQuan.onclick = function(){
				popLayerJia[0].style.display = 'none';
				popQuan.style.display = 'none';
			}
		}
	}
	
}();

/*金牌预言*/
~function(){
	
	
	  fnGoldDetail();
	  fnGoldResult();
	  fnSubmit();
	  goldScroll();
	function fnGoldDetail(){
		if(document.getElementById('popClickGold')){
		var popClickGold =document.getElementById('popClickGold');		
		var popLayerGold = getByClass(document, "popLayerGold", "div" );		
		var popDetailGold = document.getElementById('popDetailGold');
			 popClickGold.onclick = function(){
				popLayerGold[0].style.display = 'block';
				popDetailGold.style.display = 'block';
			}
		}
		if(document.getElementById('popDetailGold')){
			var  popCloseGold = document.getElementById('popDetailGold');
			 popCloseGold.onclick = function(){
				popLayerGold[0].style.display = 'none';
				popDetailGold.style.display = 'none';
			}
		}
	}
	
	function fnGoldResult(){
		if(document.getElementById('ico_more')){
		var icoMore = document.getElementById('ico_more');
		var  popResult = document.getElementById('popResult');
		var popLayerGold = getByClass(document, "popLayerGold", "div" );	
			 icoMore.onclick = function(){
				popLayerGold[0].style.display = 'block';
				popResult.style.display = 'block';
			}
		}
		if(document.getElementById('popCloseResult')){
			var  popCloseResult = document.getElementById('popCloseResult');
			 popCloseResult.onclick = function(){
				popLayerGold[0].style.display = 'none';
				popResult.style.display = 'none';
			}
		}
	}
	
	function fnSubmit(){
		if(document.getElementById('inputSubmit')){
		var inputSubmit = document.getElementById('inputSubmit');
		var popSubmit = document.getElementById('popSubmit');
		var popLayerGold = getByClass(document, "popLayerGold", "div" );	
			 inputSubmit.onclick = function(){
				popLayerGold[0].style.display = 'block';
				popSubmit.style.display = 'block';
			}
		}
		if(document.getElementById('popCloseSubmit')){
			var popCloseSubmit = document.getElementById('popCloseSubmit');
			 popCloseSubmit.onclick = function(){
				popLayerGold[0].style.display = 'none';
				popSubmit.style.display = 'none';
			}
		}
	}
	

function goldScroll(){
	if( document.getElementById('scrollfirst') &&document.getElementById('scroll_contentfirst')){
		var scrollfirst = document.getElementById('scrollfirst');
		var scroll_contentfirst = document.getElementById('scroll_contentfirst');
		var objscroll1=new Scrollbar('scrollfirst','scroll_contentfirst',720,300);
	  objscroll1.Yscrollbar('images/ScrollBar.jpg',16,14,'images/ScrollHandle.jpg',36);//开启Y轴纵向滚动条
	  document.onmousemove=function(e){
	  objscroll1.setMove(e);
	  }
	  document.onmouseup=function(){
		  objscroll1.setUp();
	  }
	}
}
  
}();


~function(){
	/* var aPop=getByClass( document, "pop", "div");
	 var aPopLayer=getByClass( document, "popLayer", "div" );
	var aPopClick = getByClass( document, "popClick", "a" );
	var aClose = getByClass( document, "close", "span" );
	
	for( var i=0; i<aPopClick.length;i++){
		aPopClick[i].index = i;
		aPopClick[i].onclick = function(){
			aPopLayer[this.index].style.display = 'block';
			aPop[this.index].style.display = 'block';
		}
	}
	
	for( var i=0; i<aClose.length;i++){
		aClose[i].index = i;
		aClose[i].onclick = function(){
			aPopLayer[this.index].style.display = 'none';
			aPop[this.index].style.display = 'none';
		}
	}
	*/
	
	var popLayerJianying = document.getElementById('popLayerJianying');

	
	
	fnDetailJian();
	fnResultJian();
	
	fnTabCai();
	function fnDetailJian(){
		if(document.getElementById('popClickJianying')){
		var popClickJianying = document.getElementById('popClickJianying');	
		var popDetailJianying = document.getElementById('popDetailJianying');
			popClickJianying.onclick = function(){
				popDetailJianying.style.display = 'block';
				popLayerJianying.style.display = 'block';
			}
		}
		if(document.getElementById('popCloseJianying')){
			var popCloseJianying = document.getElementById('popCloseJianying');
			 popCloseJianying.onclick = function(){
				popDetailJianying.style.display = 'none';
				popLayerJianying.style.display = 'none';
			}
		}
	}
	
	function fnResultJian(){
		if( document.getElementById('resultTipBtn')){
			var resultTipBtn = document.getElementById('resultTipBtn');
		  //  var jianyingIsRight  = document.getElementById('jianyingIsRight');
			var jianyingIsBd  = document.getElementById('jianyingIsBd');
			 resultTipBtn.onclick = function(){
				//popLayerJianying.style.display = 'block';
				jianyingIsBd.style.display = 'block';
			}
		}
		
	}
	
	
	function fnTabCai(){
		
		
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

}();



function getByClass(oParent,sClass,tagName){
	var aEle = [],result = [];
	if( tagName && typeof tagName == 'string'){
		aEle = oParent.getElementsByTagName(tagName);	
	}else{
		aEle = oParent.getElementsByTagName('*');
	}
	
	if(!tagName && oParent.getElementsByClassName){
		return oParent.getElementsByClassName(sClass); //性能考虑
	}else{
		var re = new RegExp('(^|\\s)' + sClass + '($|\\s)', 'i');
		for(var i = 0; i < aEle.length; i++){
			if(re.test(aEle[i].className)){
				result.push(aEle[i]);
			}
		}
		return result;
	}
}	
		
