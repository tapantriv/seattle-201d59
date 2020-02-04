'use strict';

var ready = confirm('Are you ready?');
if (ready === true) {
  alert('Awesome, let\'s play a game');
} else {
  alert('well poo, maybe later?');
}

var name = prompt('What is you name');
if (name.trim().toLowerCase() === 'jacob') {
  console.log('welcome back');
} else {
  console.log('hello new person');
}

var color = prompt('What is you favorite color?');

console.log(color);
console.log(color.toLowerCase);
console.log(color.toLowerCase());
console.log(color);


switch (color.toLowerCase()) {
  case 'red':
    console.log('your favorite color is  red!!');
    break;
  case 'blue':
    console.log('your favorite color is blue!!');
    break;
  default:
    console.log('I dont know that color :(');
}
