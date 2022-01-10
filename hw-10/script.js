/* Задача:

	1. С массива sports с помощью метода .slice() скопировать в новый массив summer_sports массивы, которые относятся к летним видам спорта.
	2. С массива sports с помощью метода .slice() скопировать в новый массив winter_sports массивы, которые относятся к зимним видам спорта.
	3. С полученных массивов summer_sports и winter_sports вырезать в новый массив fruits те массивы, которые относятся к фруктам.
	4. Вывести все элементы полученных массивов summer_sports, winter_sports, fruits в консоль в виде, который изображен на рисунке console.png.
	
*/

winterSportsTitle = '*** Winter sports ***';
summerSportsTitle = '*** Summer sports ***';
fruitsTitle       = '*** Fruits ***';

sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

winter_sports = sports.slice(0, 5);
for(i = 0; i < winter_sports.length; i++) {
	winter_sports[i] = winter_sports[i].join(': ');
}

summer_sports = sports.slice(5);
for(i = 0; i < summer_sports.length; i++) {
	summer_sports[i] = summer_sports[i].join(': ');
}

fruits = winter_sports.splice(2, 1).concat(summer_sports.splice(2, 2));

console.log(`
${winterSportsTitle}
${winter_sports.join('\n')}

${summerSportsTitle}
${summer_sports.join('\n')}

${fruitsTitle}
${fruits.join('\n')}

`);