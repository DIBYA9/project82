var mouseevent ="empty";
var lp_x,lp_y;
canvas = document.getElementById('myCanvas');
 ctx=canvas.getContext("2d");
 color="black";
 width_of_line=5;
 canvas.addEventListener("mousedown",mouse_down);
 canvas.addEventListener("mouseleave",mouse_leave);
canvas.addEventListener("mouseup",mouse_up);
canvas.addEventListener("mousemove",mouse_move);
function mouse_down(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseevent="mousedown";
}
 
function mouse_up(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseevent="mouseup";
}
function mouse_leave(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseevent="mouseleave";
}
function mouse_move(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last position of coords x and y");
        console.log("x="+lp_x+"y="+lp_y);
        ctx.moveTo(lp_x,lp_y);
    console.log("current position of coords x and y");
    console.log("x="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);
    ctx.stroke();
    }
    lp_x=current_position_of_mouse_x;
    lp_y=current_position_of_mouse_y;
}

