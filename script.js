
var nodelist=document.getElementsByTagName("li");
for(var i=0;i<nodelist.length;i++){
    var span=document.createElement("SPAN");
    var text=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(text);
    nodelist[i].appendChild(span);
}
var close=document.getElementsByClassName("close");
for(var i=0;i<close.length;i++){
    close[i].onclick=function(){
        var div=this.parentElement.style.display="none";
    }
}
document.getElementById("mybtn").onclick=function(){
    var li=document.createElement("LI");
    var input=document.getElementById("myinput").value;
var text=document.createTextNode(input);
li.appendChild(text);
if(input===""){
    alert("must write sometimg")
}else{
    document.getElementById("myul").appendChild(li);
    li.className="list-group-item";
}

var input=document.getElementById("myinput").value="";

    var span=document.createElement("SPAN");
    var text=document.createTextNode("\u00D7");
    span.appendChild(text);
    span.className="close";
    li.appendChild(span);
    var close=document.getElementsByClassName("close");
for(var i=0;i<close.length;i++){
    close[i].onclick=function(){
        var div=this.parentElement.style.display="none";
    }
    
}
}
