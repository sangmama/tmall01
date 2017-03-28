// JavaScript Document


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

