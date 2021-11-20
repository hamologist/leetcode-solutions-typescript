/* eslint-disable no-param-reassign */

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    const temp = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = temp;
  }
}

const testCase = 'hello'.split('');
console.log(testCase);
reverseString(testCase);
console.log(testCase);
