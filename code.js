let body=document.body;
let txt=document.getElementById('txt');
body.style.color='black';
body.style.backgroundColor='white';
function darkMode(){
if(body.style.backgroundColor==='white'){
    body.style.backgroundColor='black';
    body.style.color='white';
    txt.innerText="Disable Dark Mode"
}
else{
    body.style.backgroundColor='white';
    body.style.color='black';
    txt.innerText="Enable Dark Mode"
}
}