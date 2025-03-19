let sc = document.getElementById("sc");
let mn = document.getElementById("mn");
let hr = document.querySelector("#hr")


 updateTime = () =>{
let day = new Date(),
 hh = day.getHours();
 mm = day.getMinutes();
 ss = day.getSeconds();

let hH = (hh / 12) * 360;
let mH = (mm / 60) * 360;
let sH = (ss / 60) * 360;

hr.style.transform = `rotate(${hH}deg)`;
mn.style.transform = `rotate(${mH}deg)`;
sc.style.transform = `rotate(${sH}deg)`;
};

setInterval(updateTime, 1000);
updateTime();

