# Class 03

## Front Row Views

## Reading Notes

## Warm-up

- What do these commands do?
  - `git add index.html`
    - adds file to 'git' in preparation for saving!
  - `git commit -m 'adding html files'`
    - creates a snapshot of the changes in the added files, and attaches a message.
  - `git status`
    - comparing what is on local filesystem with changes that git has tracked.
  - `git push origin master`
    - Takes changes that are staged, and uploads the packet to your repository on github with changes done on local machine.

## Lab Review


## CSS Box Model

- What is the box model:
  - Every element in HTML has an invisible box:
  - The box is the way developers like to think aobut elements
    - Height and Width
    - Margin: The space around the box
      - This is your first approach to moving your box around among other elements on the page.
    - Padding: The space between the content (H/W) and the border;
      - This is your first approach to moving content around WITHIN the box container itself.
    - Border: The properties of the box itself.
      - This should be used to hightlight your box or add some structure to the element within the surrounding layout;

## Loops!!!

### For

- Loops are used to allow the same lines to run over and over again.
- For Loop:
  - key word `for` which takes a step to initialize, condition to check after each iteration of the loop, and a step to increment our initialized value.

```js

// For loops have a very specific syntax:

for (var i = 0; i < 10; i ++ ) {
  console.log('print ' + i);
}

// breaking this down:
for (
  var i = 0; // setting our intialization variable.
  i < 10; // setting a condition to check each iteration of our loop.
  i ++;  // incrementing our variable at the end of each iteration
) {
  // here is the code that will be repeated each time we go through the loop.
}
```

### While

- while loops just take a condition and will repeat their code until that condition is not met
  - We have to manally upate our condition in order to make the condition fail:

```js

// This does the same thing as the for loop, but used in a different loop
var i = 0;
while (i < 10) {
  console.log('print ' + i);
  i++;
}

```

### Do / While

- This is everything the while loop has, but will ALWAYS run at least once before checking if the condition is truthy:

```js

// Again this does the same thing, but the do {} block will always run at least once. No matter what conditions are being checked in the while {}.
var i = 0;
do {
  console.log('print ' + i);
  i++;
} while (i < 10);

```

### Arrays and loops are best friends!!

- This can add items in a array to string and print it

```js
var foodsILike = ['Ice Cream', 'Mac & Cheese', 'Bacon'];
var myString = 'My favorite foods are';

for ( var i = 0; i < foodsILike.length; i++) {
  myString += ', ' + foodsILike[i];
}


console.log(myString); // My favorite foods are, Ice Cream, Mac & Cheese, Bacon
```

- We can also use our understanding of truthy and falsey values to run some conditions in our loop to build a better string

```js

var foodsILike = ['Ice Cream', 'Mac & Cheese', 'Bacon'];
var myString = 'My favorite foods are';

for ( var i = 0; i < foodsILike.length; i++) {

  // When we reach the end of our array, i + 1 will be undefined, this is false in JS

  if (!foodsILike[i+1]) { // this will be true when we have reached the end of our favorite foods.

  // By simply adding a '!' before the condition, we can reverse the 'false' to 'true' and can get our outlying operation to add an extra word to our string :)

    myString += ', and ' + foodsILike[i];
  } else {
    myString += ', ' + foodsILike[i];
  }
}


console.log(myString); // My favorite foods are, Ice Cream, Mac & Cheese, and Bacon
```
