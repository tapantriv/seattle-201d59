# Class 02

## Code Review

- mv: `mv <file you want to move> <where you want to move>` moves a files 
to a new directory.
- cp: `cp <file you want to copy> <where you want to copyx  >` copy a file 
- mkdir: `mkdir <directory name>` create a directory.
- rm: `rm <path to removable things.>`removes a directory/file.

Lab:
- `var`: a keyword used piece of data that you want to save.
  - used the `=` sign to set the value.
- `prompt()`: a function, that prompts the user for information.
- `alert()`: a function, that presents the user with some information.

## Git Commands and Github Repos

`git clone <github repo>`: copies a whole github project to your local machine.

Checking for file changes:
`git status`: looks at our files and reports on changes,

Making changes to our source code:
`git add <files/filename>`: tells git to care about changes made.

Save Changes to git:
`git commit -m '<commit message>`

Push to the cloud:
`git push origin <branch name>`


## Talk about data Types

- JS Data Types ( the most basic ) 
  - String: text characters./
  - Numbers: numerical values.
  - Booleans: true / false.
  - null: a fancy way of saying nothing.
  - undefined: a fancy way of saying you've overlooked something.
    - all of these are considered immutable: the do not change.

```js
 // Number, String, Boolean - all reserved words


var num = 3 // a number type

num = '3' // a string type, loosely dynamic type changing.

var str = 'Here is my string' // a string type

var bool = true // boolean type

prompt('What is your name'); // returns a string / null.

```

Arrays

```js
// Arrays are just a grouping of things.

var cars = ['honda', 'toyota', 'ford', true, 4234];

// we can access values of an array through an index

console.log(cars[1]); // 'toyota'
console.log(cars[0]) // 'honda'
```

Conditional logic

- operations that run when a specific condition is met

```js

var num = 3
 
// logical operators and comparisons
if (num >== 3) {
  console.log('number variable is 3');
}

// making two comparisons, both must be true
if (num === 3 && bool === false) {
  console.log('number is 3 and bool is false');
}

// making two comparison, but now only one needs to be true
if (num === 3 || bool === false) {
  console.log('Either num is 3 or bool is false');
}

if (num >= 3) {
  console.log('num greater than 3');
} else {
  console.log('num not greater than or equal 3');
}

if (num > 5) {
  console.log('this is too large');
} else if (num < 3) {
  console.log('this is too small);
} else {
  console.log('this is just right');
}

// switch statement

switch (num) {
  case 3:
    console.log('number is 3');
    break;
  case 4:
    console.log('number is 4');
    break;
  case 5:
    console.log('number is 5');
    break;
  default:
    console.log('your number is either small or large');
}

```












## Demo: Conditional statements.