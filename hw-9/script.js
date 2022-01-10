/* Дано:
hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

Используя циклы, if/else, switch/case и методы .push(), .pop(), .unshift(), .shift(), .concat(), .splice(), .reverse() .join():
  1. Объединить массивы destination, native, hero в общий массив rainbow.
  2. Сделать реверс элементов полученного массива rainbow.
  3. Изменить/добавить элементы массива rainbow так, что бы в итоге получился массив вида ['Richard','Of','York','Gave','Battle','In','Vain'];
  4. Вывести элементы полученного массива в html в виде, который представлен в прикрепленном рисунке rainbow.png.

Использовать все методы не обязательно! Берем только те, которые помогут вам привести массив к такому виду, что бы вывести его как на прикрепленной картинке rainbow.png. */

circles     = [];
colors      = ['red', 'orange', 'yellow', 'lightgreen', 'aqua', 'blue', 'violet'];
hero        = ['Ivan'];
native      = ['York', 'Of'];
destination = ['Poltava', 'In'];

for(i = 0; i < colors.length; i++) {
  circles[circles.length] = `<span class="circles" style="background: ${colors[i]}"></span>`
}

rainbow = hero.concat(native, destination).reverse();
rainbow.unshift('Richard');
rainbow.splice(1, 2);
rainbow.splice(3);
rainbow.splice(3, 0, 'Gave', 'Battle', 'In', 'Vaine');

TRS = [];
for(tr = 0; tr < 2; tr++) {
  TDS = [];
    for(td = 0; td < rainbow.length; td++) {
      if( tr === 0 ) {
        TDS.push(`<td style="width: 80px">${circles[td]}</td>`);
      } else {
          TDS.push(`<td style="width: 80px">${rainbow[td]}</td>`); 
        }
    }

  TRS.push(TDS.join(''));
}

document.write(`<table>${TRS.join('</tr><tr>')}</table>`);

/*=====================*/

divs = [];

for(i=0; i<rainbow.length; i++){
  divs.push(`
    <div class="rainbow">
      <div class="rainbow__circles">${circles[i]}</div>
      <div class="rainbow__text">${rainbow[i]}</div>
    </div>
  `);
}

document.write(divs.join(``));

