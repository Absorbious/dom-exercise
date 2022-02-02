let container = document.querySelector('#container');

let par = document.createElement('p');
container.appendChild(par);
par.innerText = 'Hey I\'m red!';
par.style.color = 'red';

let h3 = document.createElement('h3');
container.appendChild(h3);
h3.style.color = 'blue';
h3.innerText = 'I\'m a blue h3';

let div = document.createElement('div');
container.appendChild(div);
div.style.cssText = 'border: black solid 1px; background-color: pink';

let h1 = document.createElement('h1');
div.appendChild(h1);
h1.innerText = 'Im in a div';

let par2 = document.createElement('p');
div.appendChild(par2);
par2.innerText = 'Me too';

let btn = document.querySelector('button');
btn.style.cssText = 'border-radius: 10px; background-color: red; padding: 10px 20px; border: none; color: white; font-size: 1.1em';

btn.addEventListener('click', function (e) {
    console.log(e);
  });
