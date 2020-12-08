var canvas =document.getElementById("Drawing_Book");
ctx=canvas.getContext("2d");
color = "black";
var width =1;
var last_x_position;
var last_y_position;
var width =screen.width;
var new_width =screen.width-70;
var new_height =screen.height-300;
if(width < 992) {
document.getElementById("Drawing_Book").width=new_width;
document.getElementById("Drawing_Book").width=new_height;
document.body.style.overflow = "hidden";
}


canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e){
color = document.getElementById("Color").value;
width = document.getElementById("width_of_the_line").value;
console.log("this_is_a_touch_start_event");
last_x_position = e.touches[0].clientX-canvas.offsetLeft;
last_y_position = e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e){
currentx = e.touches[0].clientX - canvas.offsetLeft;
currenty = e.touches[0].clientY - canvas.offsetTop;
console.log("touchmove"+currentx+","+currenty);
 console.log("in mousedownevent");
 ctx.beginPath();
 ctx.strokeStyle=color;
 ctx.lineWidth=width;
 ctx.moveTo(last_x_position,last_y_position);
 console.log("last_position"+last_x_position+","+last_y_position);
 ctx.lineTo(currentx,currenty);
 ctx.stroke();
last_x_position = currentx;
last_y_position = currenty;
}

function Clear_Area(){
ctx.clearRect(0,0,canvas.width,canvas.height);
}

