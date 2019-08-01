// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  //                                   15  -  5    + 1 = 11 for a range of 1-10 but then add five to the value 
  //     [                             v      v      v ]                       to increase it's min and max
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; //           to a floor of      5  to 15

  return 0; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);