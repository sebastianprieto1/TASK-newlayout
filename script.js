let today = new Date();
let dd = String(today.getDate()).padStart(2,'0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyy = today.getFullYear();
let hh= String(today.getHours()).padStart(2,'0');
let min = String(today.getMinutes()).padStart(2,'0');


let time = `${hh}:${min}`;
today = `${dd}-${mm}-${yyy}`;
let dateSpan = document.getElementById('dateSpan');


dateSpan.innerHTML= `<strong>Date:</strong> ${today} |
 <strong>Time:</strong> ${time}`;

 let dateSpanMobile = document.getElementById('dateSpanMobile');
 dateSpanMobile.innerHTML= `<strong>Date:</strong> ${today} |
 <strong>Time:</strong> ${time}`;