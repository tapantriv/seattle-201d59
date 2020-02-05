'use strict';

/**
 *  1) Ask the user if they are ready to play a game (yes or no).
 *  2) Display a message depending on their answer.
 *  3) If they answer yes: prompt the user with the question (Guess a number between 1 and 10). The answer will be hard coded.
 *  4) Display one of 4 responses to their guess: 
 *      1) Your number is too low
 *      2) Your number is too high
 *      3) Your number is correct
 *      4) Invalid Input
 */
var answer = prompt('Are you ready to play a game? (yes:y / no:n');


if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {


  alert('then lets play a game');
  var correct = '6';
  var question = prompt('give me a number between 1 and 10');

  // if (question == correct) {
  //   alert('Your answer is correct');
  // } else if (question < correct) {
  //   alert('Your number is too low');
  // } else if (question > correct) {
  //   alert('Your number is too high');
  // } else {
  //   alert('Invalid Input');
  // }
  switch(question) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
      alert('your answer is too low');
      break;
    case correct:
      alert('Your answer is correct');
      break;
    case '7':
    case '8':
    case '9':
    case '10':
      alert('Your Anser is too high');
      break;
    default:
      alert('Invalid Input');
  }

} else {

  alert('Well too bad, we could have had fun :(');

}
