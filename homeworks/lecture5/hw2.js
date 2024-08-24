/**
 * reverse words in a string
 *
 * input: "the sky is blue"
 * output: "blue is sky the"
 *
 * extra: in-place
 * @param {string[]} str
 */
function reverseWords(str) {
  // your code here
  const reverseSection = (start, end) => {
    while (start < end) {
      [str[start], str[end]] = [str[end], str[start]];
      start++;
      end--;
    }
  };

  reverseSection(0, str.length - 1);

  let start = 0;
  for (let end = 0; end <= str.length; end++) {
    if (end === str.length || str[end] === ' ') {
      reverseSection(start, end - 1);
      start = end + 1;
    }
  }

}

const input = 'the sky is blue'.split(''); // ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e']
reverseWords(input);
console.log(input.join(''))