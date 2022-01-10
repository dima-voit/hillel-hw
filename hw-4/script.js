totalPoints   = 0;
correctAnswer = 10;
wrongAnswer   = 0;


q1 = prompt("Сколько будет 2+2?");
q1 = q1 ? q1.trim().toLowerCase() : ``;
switch(q1){
	case 4:
    case '4':
	case 'четыре':
    case 'чотири':
    totalPoints += correctAnswer;
		break;
	default:
        alert("Ответ принят! Ответ неверный!");
        totalPoints += wrongAnswer;
        break;
}

q2 = prompt("Солнце встаёт на востоке?");
q2 = q2 ? q2.trim().toLowerCase() : ``;
switch(q2){
	case 'да':
	case 'ага':
    totalPoints += correctAnswer;
		break;
    default:
        alert("Ответ принят! Ответ неверный!");
        totalPoints += wrongAnswer;
        break;
}

q3 = prompt("Сколько будет 5 / 0?");
q3 = q3 ? q3.trim().toLowerCase() : ``;
switch(q3){
	case 'на 0 делить нельзя':
	case 'infinity':
    totalPoints += correctAnswer;
		break;
    default:
        alert("Ответ принят! Ответ неверный!");
        totalPoints += wrongAnswer;
        break;
}

q4 = prompt("Какого цвета небо?");
q4 = q4 ? q4.trim().toLowerCase() : ``;
switch(q4){
	case 'голубое':
	case 'синее':
    totalPoints += correctAnswer;
		break;
    default:
        alert("Ответ принят! Ответ неверный!");
        totalPoints += wrongAnswer;
        break;
}

q5 = prompt("Какой правильный ответ на главный вопрос жизни, вселенной и всего такого?");
q5 = q5 ? q5.trim().toLowerCase() : ``;
switch(q5){
	case 42:
    case '42':
    totalPoints += correctAnswer;
		break;
    default:
        alert("Ответ принят! Ответ неверный!");
        totalPoints += wrongAnswer;
        break;
}


alert(`Общее количество баллов ` + totalPoints);