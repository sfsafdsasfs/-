var list=document.getElementsByTagName("ul")[0];
var leftIn=document.getElementById("left-in");
var rightIn=document.getElementById("right-in");
var leftOut=document.getElementById("left-out");
var rightOut=document.getElementById("right-out");
var newNum=document.getElementById("num-in");
leftIn.onclick=function(){
if(newNum.value){
    var newChild=document.createElement("li");
  newChild.innerText=newNum.value;
  if(list.children.length!=0){
  var firstOne=list.firstChild;
  list.insertBefore(newChild,firstOne);
  }else{
    list.appendChild(newChild);
  }
}
};
rightIn.onclick=function(){
if(newNum.value){
    var newChild=document.createElement("li");
  newChild.innerText=newNum.value;
  list.appendChild(newChild);
}
};
leftOut.onclick=function(){
  if(list.children.length!=0){
    var firstOne=list.firstChild;
    list.removeChild(firstOne);
  }
};
rightOut.onclick=function(){
   if(list.children.length!=0){
    var lastOne=list.lastChild;
    list.removeChild(lastOne);
  }
};
