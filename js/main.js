
$(function(){
  initSocket();
});
 var socket,id;
function initSocket() {
  //listen
  socket = io.connect('http://192.168.0.39:8081');
  
  $('ul').on('click','a',function(e){
    e.preventDefault();
    socket.emit('node',{type:'shoot',color:$(this).attr('class')});
  });
  socket.on('response', function(e){
    console.log('lala')
    if(e.obj.green==null)e.obj.green=0;
    if(e.obj.blue==null)e.obj.blue=0;
    if(e.obj.red==null)e.obj.red=0;
    //
    $('.red').prev().stop().animate({'width':e.obj.red*100+'%'},300);
    $('.blue').prev().stop().animate({'width':e.obj.blue*100+'%'},300);
    $('.green').prev().stop().animate({'width':e.obj.green*100+'%'},300);
    e.obj.red = Math.round(e.obj.red*255);
    e.obj.green = Math.round(e.obj.green*255);
    e.obj.blue = Math.round(e.obj.blue*255);
    var red = e.obj.red.toString(16);
    if(red.length == 1)red = '0'+red;
    var green = e.obj.green.toString(16);
    if(green.length == 1)green = '0'+green;
    var blue = e.obj.blue.toString(16);
    if(blue.length == 1)blue = '0'+blue;
    var rgb = red+green+blue;
    //
    $('.couleur').css({'background-color':'#'+rgb})
  });

 
}