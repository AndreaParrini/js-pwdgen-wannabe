let UserName = prompt('Inserisci qui il tuo nome');
let UserLastName = prompt('Inserisi qui il tuo cognome');
let UserColor = prompt('Inserisi qui il tuo colore preferito');

let password = document.getElementById('password');

password.innerHTML = UserName + UserLastName + UserColor + "23";