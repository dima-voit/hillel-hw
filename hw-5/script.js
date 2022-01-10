totalPrice = 0;

choiceBun = prompt("Would you like Hamburger or Cheeseburger?");
choiceBun = choiceBun ? choiceBun.trim().toLowerCase() : "";
	if(choiceBun == "hamburger") {
		totalPrice += 10;
	} else if(choiceBun == "cheeseburger") {
		totalPrice += 15;

		choiceCheese = prompt("Would you like double cheese?");
		choiceCheese = choiceCheese ? choiceCheese.trim().toLowerCase() : "";
		if(choiceCheese == "yes") {
			totalPrice += 5;
		}
	}

choicePotato = prompt("Would you like potato?");
choicePotato = choicePotato ? choicePotato.trim().toLowerCase() : "";
	if(choicePotato == "yes") {	

		choicePotatoSize = prompt("Choose potato size: small/middle/big");
		choicePotatoSize = choicePotatoSize ? choicePotatoSize.trim().toLowerCase() : "";
			if(choicePotatoSize == "small") {
				totalPrice += 10;
			}
			if(choicePotatoSize == "middle") {
				totalPrice += 15;
			}
			if(choicePotatoSize == "big") {
				totalPrice += 20;
			}
	}

choiceSauce = prompt("Would you like sauce?");
choiceSauce = choiceSauce ? choiceSauce.trim().toLowerCase() : "";
	if(choiceSauce == "yes") {
		choiceSauceType = prompt("Choose sauce: ketchup/mayonnaise", "Ketchup");
		choiceSauceType = choiceSauceType ? choiceSauceType.trim().toLowerCase() : "";
			if(choiceSauceType == "ketchup" || choiceSauceType == "mayonnaise" || !choiceSauceType) {
				totalPrice += 10;
			}
	}

document.write(`<h2>Your order:</h2>
	<ul>
		${choiceBun ? `<li>Bun 🍔: <b>${choiceBun}</b> </li>` : ``}
		${choicePotato  == `yes` ? `<li>Potato 🍟: <b>${choicePotatoSize}</b> </li>` : ``}
		${choiceSauce   == `yes` ? `<li>Sauce 🧂: <b>${choiceSauceType}</b> </li>` : ``}
	</ul>
		<p>Price: ${totalPrice} </p>`);
