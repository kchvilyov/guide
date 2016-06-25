var snowmax=20
var snowcolor=["#FFFFFF","#c4bbcc","#ccddFF","#ccd6DD","#FFFF00","#FF0000","#FF00FF","#008000","#808000"]	//,"#c4bbcc","#ccddFF","#ccd6DD"]
var snowtype=["Arial Black","Arial Narrow","Comic Sans MS"]
//var snowtype=["Arial Black","Arial Narrow","Times","Comic Sans MS","Italic"]
var snowletter=["*","•","·","‘","."]; //["*","•","°","·","¤","‘","‚","."];
var sinkspeed=0.6
var snowmaxsize=25
var snowminsize=10
var snowsizerange=snowmaxsize-snowminsize
var snowingleft=0 
var snowingwidth=1
var opac=1  
var stepTime=120 
var snow=new Array()
var marginbottom
var marginright
var timer
var x_mv=new Array();   var crds=new Array();   var lftrght=new Array();
var browserinfos=navigator.userAgent 
d=document
var isOpera=self.opera  
var ie5=d.all&&d.getElementById&&!isOpera
var ns6=d.getElementById&&!d.all
var browserok=ie5||ns6||isOpera
function randommaker(range){return Math.floor(range*Math.random())}
function botRight()
{
    if(ie5||isOpera)
    {
      marginbottom=d.body.clientHeight;  
      marginright=d.body.clientWidth;
    }
    else
      if(ns6)
      {
        marginbottom=innerHeight; marginright=innerWidth;
      }
}
function checkPgDn()
{
 scrltop=ns6?pageYOffset:document.body.scrollTop;
}
function initsnow() 
{
  checkPgDn();if(ns6)setInterval("checkPgDn()",999);
  botRight();
  for (i=0;i<=snowmax;i++)
  {
    crds[i] = 0;                      
    lftrght[i] = Math.random()*20;         
    x_mv[i] = 0.03 + Math.random()/10;
    snow[i]=d.getElementById("s"+i)
    snow[i].style.fontFamily=snowtype[randommaker(snowtype.length)]
    snow[i].style.fontSize=snow[i].size=randommaker(snowsizerange)+snowminsize
    snow[i].style.color=snowcolor[randommaker(snowcolor.length)]
    snow[i].sink=sinkspeed*snow[i].size/5
    newPosSnow(randommaker(marginbottom-3*snow[i].size));
  }
  movesnow();
}
function newPosSnow(y)
{
  var o;
  snow[i].posx=randommaker(marginright*snowingwidth-2*snow[i].size)+marginright*snowingleft
  snow[i].posy=y+(ns6?pageYOffset:d.body.scrollTop);
  snow[i].size=randommaker(snowsizerange)+snowminsize;
  if(snow[i].hasChildNodes()&&(o=snow[i].childNodes[0]).tagName=='IMG') o.width=o.height=randommaker(snowsizerange/1.6)+snowminsize;
}
function movesnow() 
{
  for (i=0;i<=snowmax;i++) 
  {
    snow[i].style.top=snow[i].posy+=snow[i].sink+lftrght[i]*Math.sin(crds[i])/3;
    crds[i] += x_mv[i];
    snow[i].style.left=snow[i].posx+lftrght[i]*Math.sin(crds[i]);
    if(snow[i].posy>=marginbottom-3*snow[i].size+scrltop || parseInt(snow[i].style.left)>(marginright-3*lftrght[i]))newPosSnow(0);
  }
  var timer=setTimeout("movesnow()",stepTime)
}
for (i=0;i<=snowmax;i++)
{
  d.write("<span id='s"+i+"' style='position:absolute;"+(opac<1?"-moz-opacity:"+opac+";filter:alpha(opacity="+(opac*100)+")":"")+";top:-"+snowmaxsize+"'>"
    +snowletter[Math.floor(snowletter.length*Math.random())]+"</span>")
}           //-moz-opacity:0.5;filter:alpha(opacity=50);
onload=function()
{
  if(browserok)setTimeout("initsnow()",99);
}
onmousewheel = onscroll = function(){checkPgDn()}
onresize = function(){botRight();}
