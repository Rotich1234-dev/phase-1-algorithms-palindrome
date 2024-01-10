function isPalindrome(word) {
  // Write your algorithm here
  const sampleWord = word.split('');
  const reversedWord = sampleWord.slice().reverse();
  const originalStr = sampleWord.join('');
  const reversedStr = reversedWord.join('');
  return originalStr === reversedStr

}

/* 
  Add your pseudocode here
*/
// initialize function isPalindrome,
//  convert the string to an array of characters,
// Create a reversed copy of the array
// Convert both arrays back to strings
// Compare the original string with its reverse

/*
  Add written explanation of your solution here
  // function isPalindrome(word):
    // Convert the string to an array of characters
    // characters = str.split('')

    // Create a reversed copy of the array

    // Convert both arrays back to strings

    // Compare the original string with its reverse
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
