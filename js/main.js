//DOM Elements
const time =document.getElementById('time'),
    greeting =document.getElementById('greeting'),
    name=document.getElementById('name'),
    focus=document.getElementById('focus');

//Options
const shoAmPm=true;

//Show Time
function showTime(){
    let today=new Date(),
    hour=today.getHours(),
    min=today.getMinutes(),
    sec=today.getSeconds();


//Set AM or PM
const amPm=hour >= 12 ? 'PM' : 'AM';

//12hr Format
hour=hour % 12 || 12;

//Output Time
time.innerHTML=`${hour}<span></span>:${addZero(min)}<span></span>:${addZero(sec)} ${shoAmPm ? amPm : ''}`;

setTimeout(showTime, 1000);

}

//Add 0
function addZero(n){
    return (parseInt(n,10) < 10 ? '0' : '') + n;
}

//Set Background and Greeting
function setBgGreet(){
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('./img/morning.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";  // 画像を繰り返さない
        document.body.style.backgroundSize = "cover";  // 画像を画面いっぱいに広げる
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('./img/noon.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Afternoon';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('./img/night.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.color = 'White';
        greeting.textContent = 'Good Evening';
    }
}


//Get Name
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent='[Enter Name]';
    }else{
        name.textContent=localStorage.getItem('name');
    }
}

//SetName
function SetName(e){
    if(e.type === 'keypress'){
        //Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }else{
        localStorage.setItem('name', e.target.innerText);
    }

}

//Get Focus
function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent='[Enter Focus]';
    }else{
        focus.textContent=localStorage.getItem('focus');
    }
}

//SetFocus

function SetFocus(e){
    if(e.type === 'keypress'){
        //Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else{
        localStorage.setItem('focus', e.target.innerText);
    }

}

name.addEventListener('keypress', SetName);
name.addEventListener('blur', SetName);
focus.addEventListener('keypress', SetFocus);
focus.addEventListener('blur', SetFocus);


//Run
showTime();
setBgGreet();
getName();
getFocus();