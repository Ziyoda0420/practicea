const user = prompt('Ismingizni kiriting');

const nameElement = document.createElement('h1');
nameElement.textContent = user;



// nameElement.style.fontsize = '500px';
nameElement.style.color = 'black';
nameElement.style.fontWeight = 'bold';
nameElement.style.top = '100px';
nameElement.style.left = '80px'
nameElement.style.position = 'absolute';

document.body.appendChild(nameElement);



let name = prompt('Ozingiz haqingizda koproq malumot kiriting');

let elemnt = document.createElement('p');
elemnt.textContent = name;

elemnt.style.color = 'red';
elemnt.style.fontWeight = 'bold';
elemnt.style.top = '150px';
elemnt.style.left = '80px'
elemnt.style.position = 'absolute';

document.body.appendChild(elemnt);

alert(name);

