price = 0;
applePrice = 10;
orangePrice = 12;
kiwiPrice = 15;

questionOne = prompt("Do you want fruits?", "Yes or No");
if(questionOne === "Yes"){
    alert("Ok, let's start! 😉");
    
    questionTwo = prompt("Do you want 🍎?", "Yes or No");
    if(questionTwo === "Yes"){
        quantity = +prompt("Enter count of 🍎.", 0);
        price = quantity*applePrice+price;
    }
    
    questionThree = prompt("Do you want 🍊?", "Yes or No");
    if(questionThree === "Yes"){
        quantity = +prompt("Enter count of 🍊.", 0);
        price = quantity*orangePrice+price;
    }
    
    questionFour = prompt("Do you want 🥝?", "Yes or No");
    if(questionFour === "Yes"){
        quantity = +prompt("Enter count of 🥝.", 0);
        price = quantity*kiwiPrice+price;
    }
} else {
    alert("Oh, bye 😔.");
}

document.write('<h1 style="text-align: center; margin-top: 100px;">Final price is ' + price + '.</h1>');