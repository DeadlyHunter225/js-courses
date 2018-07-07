
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n <= 1) {
  alert('Степень ' + n +
    'не поддерживается, введите целую степень, большую 1'
  );
} else {
  alert( pow(x, n) );
}
/*
function f(x) {
    alert( arguments.length ? 1 : 0 );
  }
  
  f(undefined);
  f();
  */
 //
/*
    function sum() {
    let result = 0;
    for(let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  }
  */
 //
 /*
 function luboenazvanie(name) {
    let phrase = "Привет, " + name;
    alert(phrase);
  }
  
  luboenazvanie('Дима');
  */
 //