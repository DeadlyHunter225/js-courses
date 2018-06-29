/*let result = "";

for (let i = 1; i <= 5; i = i + 1) {
    result = result + i;
}

document.write(result);
*/
//
/*let result2 = "";

for (let j = 5; j >= 1; j = j - 1) {
    result2 = result2 + j;
}

document.write(result2);
*/
//

/*let a=3;

for (let k = 1; k <= 10; k++) {
    document.write (a + "*" + k + "=" + a * k + "<br>");
}
*/
//


var x = Number(prompt("Введите число: "));
var j = 0;
if (x <= 0 ) {
    alert("введите число большее нуля");
    } else document.write(x);
document.write("<br>");
for (var i = 1; i <= x; i++) {
document.write(i);
if (i <= (x - 1)) document.write( " + " );
j = j + i; 
if (i == x) document.write( " = " + j);
}
document.write("<br>" + "Сумма чисел от 1 до "  + x + " равнa " + j);
