/*
Ввести с клавиатуры a и b, где а меньше b (проверку написать кодом). Запустить цикл перебора от a до b с шагом h (ввод с клавиатуры). Посчитать сумму факториалов* чисел которые попадаются во время перебора.
1. Запрашиваем через prompt значение переменной a.
2. Запрашиваем через prompt значение переменной b, которое должно быть больше введенного a.
3. Запрашиваем через prompt значение переменной h, которая должна быть строго больше 0.
4. Запускаем цикл перебора чисел от a до b включительно, с шагом h. Для каждого числа в переборе считаем факториал и прибавляем его к переменной sumOfFactorials.
https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D0%B0%D0%BB
*/

factorial = 1;
sumOfFactorials = 0;

a = +prompt(`enter the value of the variable 'a'`);
b = +prompt(`enter the value of the variable 'b' > 'a' `);
    while(b < a) {
        alert(`'b' should be > 'a'`);
        b = +prompt(`enter the value of the variable 'b' > 'a'`);
    }
h = +prompt(`enter the value of the variable 'h' > 0 `);
    while(h < 0) {
        alert(`'h' should be > '0'`);
        h = +prompt(`enter the value of the variable 'h' > 0 `);
    }

for (a; a <= b; a += h) {
    factorial *= a;
    sumOfFactorials += factorial;
    console.log(sumOfFactorials);
}

document.write('<h1 style="text-align: center; margin-top: 100px;">Sum of factorials = ' + sumOfFactorials + '.</h1>');

