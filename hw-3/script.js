userName    = prompt("What is your name?", "").trim();
userName    = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
userSurname = prompt("What is your surname?", "").trim();
userSurname = userSurname[0].toUpperCase() + userSurname.slice(1).toLowerCase();
userEmail   = prompt("Enter your Email", "").replaceAll().toLowerCase();

userEmail   = (!userEmail.includes('@')) ? `not valid email <b>${userEmail}</b> (symbol @ not exist)` :
            (userEmail.startsWith('@')) ? `not valid email <b>${userEmail}</b> (symbol @ find in first place)` :
            (userEmail.endsWith('@')) ? `not valid email <b>${userEmail}</b> (symbol @ find in last place)` :
            `<b>${userEmail}</b>`;

dateOfBirth = +prompt("Enter your date of birth", "").replaceAll();
today       = new Date ();
thisYear    = today.getFullYear();
age         = thisYear - dateOfBirth;

document.write(`<ul>
                    <li>Full name: <b>${userName} ${userSurname}</b></li>
                    <li>Email: ${userEmail}</li>
                    <li>Age: <b>${age}</b></li>
                </ul>`);