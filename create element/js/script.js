let main = document.querySelector('main');

// create // a
let productCard = document.createElement('div');
let topi = document.createElement('div');
let center = document.createElement('center');
let productImg = document.createElement('img');
let bottom = document.createElement('div');
let h2 = document.createElement('h2');
let span = document.createElement('span');
let price = document.createElement('div');
let button = document.createElement('button');
let dollarContainer = document.createElement('div');
let dollarIcon = document.createElement('img');
let dollarP = document.createElement('p');
let starContainer = document.createElement('div');
let starIcon = document.createElement('img');
let starP = document.createElement('p');
let packageContainer = document.createElement('div');
let packageIcon = document.createElement('img');
let packageP = document.createElement('p');

// styling // b

// clas
productCard.classList.add('product-card');
topi.classList.add('top');
productImg.classList.add('product-img');
bottom.classList.add('bottom');
h2.classList.add('men');
span.classList.add('span');
price.classList.add('price');
button.classList.add('button');
dollarContainer.classList.add('container');
dollarIcon.classList.add('icons');
starContainer.classList.add('container');
starIcon.classList.add('icons');
packageContainer.classList.add('container');
packageIcon.classList.add('icons');

// text
h2.innerHTML = 'MEN’S CLOTHING (120)';
span.innerHTML = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday';
button.innerHTML = 'В избранное';
dollarP.innerHTML = '109';
starP.innerHTML = '3,9';
packageP.innerHTML = '120';

// attributes
productImg.src = './assets/img/81fPKd-2AYL 1.png';
dollarIcon.src = './assets/icons/dollar-sign.svg';
starIcon.src = './assets/icons/star (1).svg';
packageIcon.src = './assets/icons/package.svg';

// append // c
center.appendChild(productImg);
topi.appendChild(center);
bottom.appendChild(h2);
bottom.appendChild(span);
bottom.appendChild(price);
bottom.appendChild(button);
productCard.appendChild(topi);
productCard.appendChild(bottom);
main.appendChild(productCard);
dollarContainer.appendChild(dollarIcon);
dollarContainer.appendChild(dollarP);
price.appendChild(dollarContainer);
starContainer.appendChild(starIcon);
starContainer.appendChild(starP);
price.appendChild(starContainer);
packageContainer.appendChild(packageIcon);
packageContainer.appendChild(packageP);

price.appendChild(packageContainer);

const buttonAdd = document.querySelector('.button');
let purchased = false;

buttonAdd.addEventListener('click', function() {
    if (purchased) {
        this.innerHTML = 'В избранное';
        this.style.color = '';
        this.style.backgroundColor = '';
        purchased = false;
    } else {
        this.innerHTML = 'Добавлено';
        this.style.backgroundColor = 'blue';
        this.style.color = 'white';
        purchased = true;
    }
});