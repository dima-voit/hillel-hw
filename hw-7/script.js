/*
Сформировать массив arrА размерностью (длиной), которую запрашиваем у пользователя (prompt()).
Заполнить массив arrА рандомными числами.
В сформированном массиве arrА найти простые числа и записать их в массив arrB.
В полученном массиве arrB найти минимальное и максимальное число.
https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE#:~:text=2%2C%203%2C%205%2C%207,%D1%87%D0%B8%D1%81%D0%BB%D0%B0%20%D0%B1%D1%8B%D1%82%D1%8C%20%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%8B%D0%BC%20%D0%BD%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D1%82%D1%81%D1%8F%20%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D1%82%D0%BE%D0%B9.
*/

arrA = new Array(+prompt(`Enter a number that characterizes the length of the array`));
arrB = [];

toStart: for (i = 0, min = 0, max = 100; i < arrA.length; i++) {
  arrA[i] = Math.floor(Math.random() * (max - min +1)) + min;

  for (j = 2; j < arrA[i]; j++) {
    if (arrA[i] % j === 0) {
      continue toStart;
    }
  }
  arrB.push(arrA[i]);
}

console.log(arrA);

for (i = 0, minValue = maxValue = arrB[0]; i < arrB.length; i++) {
  if (arrB[i] < minValue) {
    minValue = arrB[i];
  }

  if (arrB[i] > maxValue) {
    maxValue = arrB[i];
  }
}

console.log(arrB);
console.log(minValue);
console.log(maxValue);




