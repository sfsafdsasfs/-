var list=document.getElementsByTagName("ul")[0];
var leftIn=document.getElementById("left-in");
var rightIn=document.getElementById("right-in");
var leftOut=document.getElementById("left-out");
var rightOut=document.getElementById("right-out");
var newNum=document.getElementById("num-in");
leftIn.onclick=function(){
  if(list.children.length>59){
    alert("子元素过多");
  }else if(newNum.value){
    var h=Number(newNum.value);
 if(h>9 &&h<101){
    var   newChild=document.createElement("li");
  newChild.style.height=h+"px";
  if(list.children.length!=0){
  var firstOne=list.firstChild;
  list.insertBefore(newChild,firstOne);
  }else{
    list.appendChild(newChild);
  }
  }else{
    alert("数字不合规则");
  }
 }
};
rightIn.onclick=function(){
  if(list.children.length>59){
    alert("子元素过多");
  }else if(newNum.value){
    var h=Number(newNum.value);
 if(h>9 &&h<101){
    var   newChild=document.createElement("li");
  newChild.style.height=h+"px";
    list.appendChild(newChild);
  }else{
    alert("数字不合规则");
  }
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
sortBtn.onclick=function(){
  var liNode=list.children;
  var lith=liNode.length;
  var i=0;
  var j=lith-1;
  var box;
  var timer=setInterval(function(){
    if(i>=lith-1){
      clearInterval(timer);
    }
    if(j==i){
      j=lith-1;
      i++;
    }
    if(liNode[j].offsetHeight < liNode[j-1].offsetHeight){
      box=liNode[j].style.height;
      liNode[j].style.height=liNode[j-1].style.height;
      liNode[j-1].style.height=box;    
    }
    j--;
  },20);
};
