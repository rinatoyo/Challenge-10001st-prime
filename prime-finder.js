module.exports = function(n) {
  // do work here

  //A prime number is a numeral that is greater than 1 and cannot be divided evenly by any other number except 1 and itself.

  //check if number is prime.
  function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  let count = 0;
  let incr = 2;

  while (count < n) {
    if (isPrime(incr)) {
      //if it's a prime number, increase count
      count++;
    }
    //increment number
    incr++;
  }
  //incr -1 because the last number is already incremented so the nth number will be that -1.
  return incr - 1;
};
