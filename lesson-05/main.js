/*
let x = prompt('Введите ваш email');

 alert(x.match(/[\w+\d*\W\w\.\w]/ig));
 
 for(var i = 0; i < 10; i++){
 
     (function(i) {
 
           setTimeout(function(){
 
             document.write(i);
 
           }, 100);
 
     })(i);
 
   }  
*/
 //
/*
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  
  alert( fib(3) ); 
  alert( fib(7) );
 */
 //
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
 
 