# Class 04

## CSS Layout Properties

- How does an element behave around siblings.

### Position

```css
div {
  position: fixed || absolute || relative || static;
}
```

- How do I behave in the layout with my siblings.
  - static: default, element stays where it is placed.
  - relative: Move me relative to my layout siblings.
  - absolute: I want to be moved, outside of layout of my sublings.
  - fixed: The element is positioned according to the view port.

### Display

- How to I display with my adjacent siblings.
  - inline: No height or width: displays inline with other siblings.
  - block: Takes up the whole width of its parent: and allows height and width.
  - inline-block: Displays inline, while also letting height and width be set.

## Functions

- What / Why / Hooooow
- The way we repeat operations. Stores javascript operations in a "variable"
- How do create a function:

```js

function funcName (arguments) {code block}

// function declaration.
function add () {
  console.log(1 + 2);
}


// invoke the function
add();

function retValue() {
  return 1 + 2;
}

// return statements pass on information to other functions or values

// define two parameters
function retSum(num1, num2) {
  return num1 + num2;
}

// pass two arguments
retSum(1, 2);

```

### Defining function

```js

function name() {}

// hoisting: our js engine brings all of our `function` decelared names to the top of the page, not with `var` though.
var name = function() {

}
```

### Function Scope

- Where values can be accessed in your JS files

```js

var global = 'This is everywhere'

function print() {
  var local = 'I am only available here';
  console.log(local);
}

print();
console.log(global, local);

```

IIFE

```js

(function () {
  console.log('I am an EEFI');
})();

// invoke functions with ()

```

## Pair Programming

- Creating code as a duo.
  - driver: Is the person that types!
  - navigator: NOT allowed to touch but needs, to tell the driver what to work on.
  - 50 / 50 split of responsiblity.

- Forking
  1. Fork a repository you want to work on ( upper right corner button ).
  2. clone new repo down to local machine.
  3. Do work....
  4. git add, commit, push
  5. Open Pull Request to orginal code base.