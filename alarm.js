let btn=document.getElementById('alarmButton');
let btn2=document.getElementById('alarmButton2');
let date=document.getElementById('date');
let time=document.getElementById('time');
let audio=new Audio('tone\\alarmTone.mp3');
function alarm(){
audio.play();
}
function stop(){
btn2.className="btn btn-success";    
audio.pause();
}
reset=()=>{
    window.location.reload();
}
btn.addEventListener('click',()=>{
btn.className="btn btn-success";    
let d=date.value;    
let t=time.value;
let setDate=new Date(d+" "+t);
let oriDate=new Date();
let timeToRing=setDate-oriDate;
if(timeToRing>=0){
setTimeout(()=>{
alarm();
},timeToRing);
}
else{
    alert("Please Enter valid time and date");
}
});