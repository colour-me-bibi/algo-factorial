/**
 * This function returns the factorial of a given number using recursion.
 *
 * @param {Integer} num The number to find the factorial of
 * @returns {Integer} The factorial of the given number
 */
const rFactorial = (num) => {
  const cache = {};

  const factorial = (num) => {
    if (num === 0) return 1;
    if (cache[num]) return cache[num];

    const result = num * factorial(num - 1);

    cache[num] = result;
    return result;
  };

  return factorial(num);
};

/**
 * This function returns an array of all the elements spanning a given range.
 *
 * @param {Integer} startInclusive The start of the range (inclusive)
 * @param {Integer} stopExclusive  The end of the range (exclusive)
 * @returns {Array} An array of all the elements spanning the given range
 */
const range = (startInclusive, stopExclusive) => {
  return [...Array(stopExclusive - startInclusive).keys()].map(
    (i) => i + startInclusive
  );
};

/**
 * This function returns the factorial of a given number using higher-order functions.
 *
 * @param {Integer} num The number to find the factorial of
 * @returns {Integer} The factorial of the given number
 */
const functionalFactorial = (num) => {
  return range(2, num + 1).reduce((a, b) => a * b, 1);
};

/**
 * This function returns the factorial of a given number.
 *
 * @param {Integer} num The number to find the factorial of
 * @returns {Integer} The factorial of the given number
 */
const factorial = (num) => {
  let result = 1;
  for (let i = 2; i <= num; i++) result *= i;

  return result;
};

module.exports = { factorial, rFactorial, functionalFactorial };
