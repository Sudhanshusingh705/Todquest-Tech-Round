// Q5:

function drawPattern(n) {
  let pattern = '';

  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
      pattern += ' ';
    }

    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i || i === n) {
        pattern += '*';
      } else {
        pattern += ' ';
      }
    }

    pattern += '\n';
  }

  console.log(pattern);
}

drawPattern(6); 

