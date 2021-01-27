function RunLinux(){
var a,x,l,i,txt,z;
a=document.getElementById("Table").value;
if(a==''||a==null){
window.navigator.vibrate([1000,466,467,367,356,366,467]);
window.alert("ఖళి గా ఉంది ఏమైన number కోటండి అపుడు మీకు కావలిసిన Table కనిపిస్తుంది");
return false;
}
else if(a>2147483648){
window.alert("NUMBER TOO LARGE TO SHOW");
return false; 
}
else{
x = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
l=x.length;
i=0;
txt="<p>";
z=`<p>Your ${a} Table is</p>`;
 for(i=0;i<l;i++){
txt +=`<table><th> ${a} x ${x[i]} = ${a*x[i]} </th></table>`;
}
txt +="</p>";
document.getElementById("vard").innerHTML=`${z} <center> ${txt}</center>`;
}
}