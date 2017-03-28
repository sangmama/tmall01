setSize();
window.addEventListener(
	"orientationchange",
	function(){
		setSize();
	},
	false
);
window.addEventListener(
	"resize",
	function(){
		setSize();
	},
	false
)
function setSize(){
	var html = document.querySelector("html");
	var width = html.getBoundingClientRect().width;
	html.style.fontSize= width/16 + "px";
}

document.addEventListener(
	"touchmove",
	function(e){
		e.preventDefault();
	}
);



	var height = document.documentElement.clientHeight + "px";
	document.body.style.height = height;

	var pages = document.querySelectorAll(".page");
	var mCommonNav = document.querySelector(".mCommonNav");
	var  navs  = mCommonNav.getElementsByTagName("a");
	var oMain = document.querySelector(".main");
	var now = 0;
	var navNum = 0;

	end.call(pages[0]);
	function end(){
		//var box = this.querySelector(".box");
		//box.style.cssText ="-webkit-transform: rotate(360deg) scale(1) translateZ(0px);transform: rotate(360deg) scale(1) translateZ(0px);";
			var omCommonNav = document.getElementsByClassName('mCommonNav')[0];
			var aA= omCommonNav.getElementsByTagName('a');
		if(now==0){aA[0].className = "";}
		this.removeEventListener(
			"WebkitTransitionEnd",
			end,
			false
		);
		this.removeEventListener(
			"transitionend",
			end,
			false
		);
	}
	MTouch(pages).swipeUp(
		function(){
		
			
			
			
			 init();
			var next = now + 1;
		//	var navNext =  navNum + 1;
		
			if(next >= pages.length) {
				next =  pages.length-1;
			
			}
			
			
			
		/*	var omCommonNav = document.getElementsByClassName('mCommonNav')[0];
			var aA= omCommonNav.getElementsByTagName('a');
	for(var i=0; i<aA.length;i++){
	aA[i].className = "";
	}
			*/
			/*oMain.style.display ='none';*/
			pages[next].style.transition = "none";
			pages[next].className = "page";
			//navs[next].className = "";
			//var box = pages[now].querySelector(".box");
			//box.style.cssText ="-webkit-transform: rotate(0deg) scale(0) translateZ(0px);transform: rotate(0deg) scale(0) translateZ(0px);";
			setTimeout(function(){
				pages[next].addEventListener(
					"transitionend",
					end,
					false
				);
				pages[next].addEventListener(
					"WebkitTransitionEnd",
					end,
					false
				);
				navs[navNum].className = "active";
				pages[now].style.zIndex = 1;
				pages[now].style.transition = "1s -webkit-transform";
				pages[now].style.transition = "1s transform";
				pages[now].className = "page pageOld";
				pages[next].style.zIndex = 2;
				pages[next].style.transition = "1s -webkit-transform";
				pages[next].style.transition = "1s transform";
				pages[next].className = "page pageActive";	
				/*navs[navNext-1].className = "active";*/
				/*navNum= navNextNum;*/
			//	navNum = navNext;
				now = next;
				navNum++;
				if(navNum >= pages.length-2) {
					navNum =  pages.length-2;
				}
				
			
				
			},300);
		}
	);
	MTouch(pages).swipeDown(
		function(){
			 init();
			/*var omCommonNav = document.getElementsByClassName('mCommonNav')[0];
			var aA= omCommonNav.getElementsByTagName('a');
			for(var i=0; i<aA.length;i++){
			aA[i].className = "";
			}*/
			var next = now - 1;
			/*var navNextNum = navNum-1;*/
			if(next < 0 ) {
				next =0;
				
				/* navNextNum = 0;*/
			}
				navNum--;
				if(navNum <=0) {
					navNum =  0;
					
				}
			
		
		
			pages[next].style.transition = "none";
			pages[next].className = "page pageOld";
			//var box = pages[now].querySelector(".box");
			//box.style.cssText ="-webkit-transform: rotate(0deg) scale(0) translateZ(0px);transform: rotate(0deg) scale(0) translateZ(0px);";
			setTimeout(function(){	
				pages[next].addEventListener(
					"transitionend",
					end,
					false
				);
				pages[next].addEventListener(
					"WebkitTransitionEnd",
					end,
					false
				);
					navs[navNum].className = "active";
				pages[now].style.zIndex = 1;
				pages[now].style.transition = "1s -webkit-transform";
				pages[now].style.transition = "1s transform";
				pages[now].className = "page";
				pages[next].style.zIndex = 2;
				pages[next].style.transition = "1s -webkit-transform";
				pages[next].style.transition = "1s transform";
				pages[next].className = "page pageActive";
			/*	navs[next].className = "active";*/
				now = next;

				/*navNum= navNextNum;*/
			},300);
		}
	);


 init();
function init(){
var omCommonNav = document.getElementsByClassName('mCommonNav')[0];
var aA= omCommonNav.getElementsByTagName('a');
	for(var i=0; i<aA.length;i++){
		tab(aA[i],(i+1))
	}
	for(var i=0; i<aA.length;i++){
		aA[i].className = '';
		
		
	}
	
}

function tab(oA,index){
	MTouch(oA).tap(
		function(){
			var omCommonNav = document.getElementsByClassName('mCommonNav')[0];
			var aA= omCommonNav.getElementsByTagName('a');
				for(var i=0; i<aA.length;i++){
					aA[i].className = '';
				}
			/*oMain.style.display ='none';*/
			oA.className = 'active';
			//pages[index].className = "page pageActive";
				setTimeout(function(){
				pages[index].addEventListener(
					"transitionend",
					end,
					false
				);
				pages[index].addEventListener(
					"WebkitTransitionEnd",
					end,
					false
				);
				pages[now].style.zIndex = 1;
				pages[now].style.transition = "1s -webkit-transform";
				pages[now].style.transition = "1s transform";
				pages[now].className = "page pageOld";
				pages[index].style.zIndex = 2;
				pages[index].style.transition = "1s -webkit-transform";
				pages[index].style.transition = "1s transform";
				pages[index].className = "page pageActive";	
				now = index;
				
			},300);
		}
	);
}
