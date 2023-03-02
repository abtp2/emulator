/* for width and height input */
document.getElementById("i-play").onclick = function(){
var w = document.getElementById("i-width").value;
var h = document.getElementById("i-height").value;
var x = document.getElementById("iframe_container");

x.style.width = w + "px";
x.style.height = h + "px";
}



/* for width and height update */
var iframe_cont = document.getElementById("iframe_container");
function outputsize(){ 
document.getElementById("i-width").value = iframe_cont.offsetWidth;
document.getElementById("i-height").value = iframe_cont.offsetHeight;
} 
outputsize();
new
ResizeObserver(outputsize).observe(iframe_cont);




/* helper */
function val(e){;
var w = e.getAttribute("data-val");
document.getElementById("iframe_container").style.width = w + "px";
}




function getzoom(){
var container = document.querySelector("#i-main");
var inner = document.querySelector("#iframe_container");
if(inner.offsetWidth > container.offsetWidth){
var scale = container.offsetWidth / inner.offsetWidth;
inner.style.transform = "scale(" + scale + ")";
inner.style.transformOrigin = "left top";
}
}
setInterval(getzoom, 5);

 
 
 
 
 
 
 
 

document.getElementById("url-div").onsubmit = function(){
event.preventDefault();
var url = document.getElementById("url-src").value;		
var iframeDiv = document.getElementById("iframe_container");
var resetBox = document.getElementById("reset-box");
var urlBox = document.getElementById("url-box");


document.getElementById("iframe").src = url;
iframeDiv.style.opacity ="1";
iframeDiv.style.position ="relative";


resetBox.style.opacity ="1";
resetBox.style.position ="relative";
resetBox.style.zIndex ="2";

urlBox.style.opacity ="0";
urlBox.style.position ="absolute";
urlBox.style.zIndex ="1";
}






document.getElementById("reset").onclick = function(){
var iframeDiv = document.getElementById("iframe_container");
var resetBox = document.getElementById("reset-box");
var urlBox = document.getElementById("url-box");


document.getElementById("url-src").value ="";
document.getElementById("iframe").src ="";
iframeDiv.style.opacity ="0";
iframeDiv.style.position ="absolute";

resetBox.style.opacity ="0";
resetBox.style.position ="absolute";
resetBox.style.zIndex ="1";

urlBox.style.opacity ="1";
urlBox.style.position ="relative";
urlBox.style.zIndex ="2";
}





document.getElementById("loader-close").onclick = function(){
document.getElementById("loader").style.display ="none";			
}




