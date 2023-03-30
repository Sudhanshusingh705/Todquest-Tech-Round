// Q4:check whether a number is prime or not ?


function isPrime(num) {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  const number = [2];
  
  
  if (isPrime(number)) {
    console.log(`${number} is prime`);
  } else {
    console.log(`${number} is not prime`);
  }

  const num = [1];
  
  if (isPrime(num)) {
    console.log(`${num} is prime`);
  } else {
    console.log(`${num} is not prime`);
  }


  // run the code open cmd and write node primenumber.js press enter code is run.