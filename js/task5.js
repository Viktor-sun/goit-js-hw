function checkForSpam(str) {
  // Write code under this line
  const array = str.toLowerCase();

  const chekWords =
    array.includes('sale') || array.includes('spam') ? true : false;
  return chekWords;
}

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
