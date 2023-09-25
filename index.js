function isPalindrome(word) {
  // Convert the word to lowercase to handle case-insensitive palindromes
  word = word.toLowerCase();

  // Initialize two pointers, one at the beginning and one at the end of the word
  let left = 0;
  let right = word.length - 1;

  // Iterate while the left pointer is less than the right pointer
  while (left < right) {
    // If characters at the left and right pointers are not the same, it's not a palindrome
    if (word[left] !== word[right]) {
      return false;
    }

    // Move the pointers towards each other
    left++;
    right--;
  }

  // If the loop completes without finding any non-matching characters, it's a palindrome
  return true;
}

/* 
  Add your pseudocode here:
  1. Convert the word to lowercase to handle case-insensitive palindromes.
  2. Initialize two pointers, one at the beginning and one at the end of the word.
  3. Iterate while the left pointer is less than the right pointer.
  4. Check if characters at the left and right pointers are not the same; if not, return false.
  5. Move the pointers towards each other.
  6. If the loop completes without finding any non-matching characters, return true.

*/

/*
  Add written explanation of your solution here:
  - We convert the input word to lowercase to handle case-insensitive palindromes.
  - Then, we use two pointers, one starting from the beginning and the other from the end, to compare characters.
  - If we find any non-matching characters, we return false, indicating that it's not a palindrome.
  - If the loop completes without finding any non-matching characters, we return true, indicating that it's a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
