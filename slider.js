var mas=["slide_1.jpg", "slide_2.jpg", "slide_3.jpg", "slide_4.jpg", "slide_5.jpg", "kombik.jpg", "marshall_headphone.jpg"];
var to=0;
function L()
{
    var tes=document.getElementById("img").style.opacity="0";
     var tes1 = document.getElementById("img").style.transition="0.7s";
setTimeout("left()", 700);
}
    
function left()
{
 var obj = document.getElementById("img");
if (to > 0) to--;
  else
    to = mas.length-1;
    obj.src = mas[to];
	var tes = document.getElementById("img").style.opacity="1";
	var tes1 = document.getElementById("img").style.transition="0.7s";
}

function R(){
    var tes = document.getElementById("img").style.opacity="0";
    var tes1 = document.getElementById("img").style.transition="0.7s";
setTimeout("right()", 700);
}
function right()
{
 var obj = document.getElementById("img");
  if (to < mas.length-1)  to++;
   else
     to = 0;
     obj.src = mas[to];
	 var tes = document.getElementById("img").style.opacity="1";
	 var tes1 = document.getElementById("img").style.transition="0.7s";
}
