function display(inputs){
  var values=document.getElementById('res');
  values.value+=inputs;
  var tex=document.getElementById("answer");
  tex.textContent=values.value;
}
function result(){
 try{
   var num1=document.getElementById('res').value;
   var num2=eval(num1);
   document.getElementById('res').value=num2;
   var contents=document.getElementById("answer");
   contents.textContent=num1;

 }catch{
  document.getElementById('res').value="Error";
 }
}
function Clear(){
  var remove=document.getElementById('res');
  remove.value='';
  var elements=document.getElementById("answer");
  elements.textContent="ans=0";
}
addEventListener("keydown",function(event){
  var txt=document.getElementById('res');
  txt.value+=event.key;
})