var list=document.getElementsByTagName("ul")[0];
var leftIn=document.getElementById("left-in");
var rightIn=document.getElementById("right-in");
var leftOut=document.getElementById("left-out");
var rightOut=document.getElementById("right-out");
var newText=document.getElementById("text-in");
var inquire=document.getElementById("inquire");
var inquireText=document.getElementById("inquire-text");
leftIn.onclick=function(){
if(newText.value){
  var inputWord=newText.value.split(/[\s,，、]+/);
 var newChild;
  for(var i=0;i<inputWord.length;i++){
 newChild=document.createElement("li");
  newChild.innerText=inputWord[i];
  if(list.children.length!=0){
  var firstOne=list.firstChild;
  list.insertBefore(newChild,firstOne);
  }else{
    list.appendChild(newChild);
  }
  }
}
};
rightIn.onclick=function(){
if(newText.value){
    var inputWord=newText.value.split(/[\s,，、]+/);
 var newChild;
  for(var i=0;i<inputWord.length;i++){
    newChild=document.createElement("li");
  newChild.innerText=inputWord[i];
  list.appendChild(newChild);
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
inquire.onclick=function(){
  var text=inquireText.value;
  var liNodes=list.children;
  var a;
  for(var i=0;i<liNodes.length;i++){
   a=liNodes[i].innerText;
    if(a.indexOf(text)!=-1){
      liNodes[i].style.backgroundColor="black";
    }
  }
}
