;(function(){

    var canvas = document.getElementById('canvas');
    canvas.width = document.body.scrollWidth;
    canvas.height = document.body.scrollHeight;
    // canvas基于状态绘画
    var context = canvas.getContext('2d');
    var linearGrad = context.createLinearGradient(0,canvas.width,canvas.width,0);
    linearGrad.addColorStop(0.0,"#117E99");
    linearGrad.addColorStop(1.0,"#083143");
    context.fillStyle =linearGrad;
    context.fillRect(0,0,canvas.width,canvas.height);
    function dirCanvas(crt,r,R,x,y,angle){
        crt.beginPath();
        for(var i = 0;i<5;i++){
            crt.lineTo(Math.cos((18 + i*72 -angle)/180 * Math.PI) * R +x,-Math.sin((18 + i*72 -angle)/180 * Math.PI) * R +y);
            crt.lineTo(Math.cos((54 + i*72 -angle)/180 * Math.PI) * r +x,-Math.sin((54 + i*72 -angle)/180 * Math.PI) * r +y);
        }
        crt.closePath();
        crt.fillStyle = "#fb3";
        crt.strokeStyle = "#fd5";
        crt.lineWidth = 3;
        crt.lineJoin = "round";
        crt.fill();
        crt.stroke();
    }

    for(var i = 0; i < 100; i ++){
        var r = Math.random()*10+10;
        var x = Math.random()*canvas.width;
        var y = Math.random()*canvas.height;
        var a =Math.random()*360;
        dirCanvas(context,r,r/2.0,x,y,a);
    }
    context.fillStyle ="rgba(3,3,3,0.3)";
    context.fillRect(0,0,canvas.width,canvas.height);
})();