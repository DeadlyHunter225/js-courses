
 let imgX = document.getElementById('imgX');

 let step = 1;
 
 let interval;
 
 function flyImg(){
 
     for(let i = 0; i<10;i++){
 
         imgX.style.left =(step += 1) + "px";
 
         if(step>=500){
 
             clearInterval(interval);
 
         } 
 
     }    
 
 }
 
 interval = setInterval(flyImg,100);

 (function () {
     var el = document.getElementById('imgX');
     el.onclick = function () {
         alert ("Поздравляем! Вы выиграли!");
     };
 })();