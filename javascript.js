var canvas = document.getElementById("meucanvas")
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#ff6868"
// x,y,h,l
ctx.fillRect(50,50,80,80)

ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill();

ctx.fillStyle = "#fffb00ff";
var circle = new Path2D();
circle.moveTo(125, 35);
circle.arc(100, 35, 25, 0, 2 * Math.PI);
ctx.fill(circle); 

 var x = 50;
 var y = 50;
 ctx.fillStyle = "rgba(147, 22, 22, 1)"
 ctx.fillRect(x, y, 80, 80);

 document.addEventListener("Keydown", function(event) {
    console.log(event.key=="a");
    if(event.key==="w"){
        x-=25;

    }if(event.key==="a"){
        x-=25;

    }if(event.key==="s"){
        x-=25;

    }if(event.key==="d"){
        x-=25;

    }
 });
 

