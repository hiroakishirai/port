// スライド
'use strict';

const pics_src = 
["/Users/h.shirai/Desktop/port/hospital/img/s1.jpg",
"/Users/h.shirai/Desktop/port/hospital/img/s2.jpg",
"/Users/h.shirai/Desktop/port/hospital/img/s3.jpg",
"/Users/h.shirai/Desktop/port/hospital/img/s4.jpg"];

let num = -1;
 
 
function slideshow_timer(){
  if (num === 3){
    num = 0;
  } 
  else {
    num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
}
 
setInterval(slideshow_timer, 1000);
