let btn=document.getElementById('alarmButton');
let date=document.getElementById('date');
let time=document.getElementById('time');
let audio=new Audio('tone\\alarmTone.mp3');
function alarm(){
audio.play();
}
btn.addEventListener('click',()=>{
let d=date.value;    
let t=time.value;
let setDate=new Date(d+" "+t);
let oriDate=new Date();
let timeToRing=setDate-oriDate;
setTimeout(()=>{
alarm();
},timeToRing);
});