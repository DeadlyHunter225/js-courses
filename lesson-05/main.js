/*
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  
  alert( fib(3) ); 
  alert( fib(7) );
 */
 //
 var i = 0;
var arr = ['Внимание, начинаем массаж спины!', 'вы чувствуете расслабление', 'пошло тепло', 'усталость уходит', 'вам становится лучше', 'с вас 100 рублей!'];

setInterval(function() {
  if (i > 5) i = 0;
  document.body.innerHTML = arr[i];
  i++;
}, 2000);