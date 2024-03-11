function isPalindrome(word) {
  // Write your algorithm here
  let arr = word.split("").reverse()
  let str = arr.join("")
  if(str === word){
    return true
  } else{
    return false
  }
}

/* 
  Add your pseudocode here
  reverse the word
  check whether the reversed word is the same as the original word
  if the condition is true then return true
*/

/*
  Add written explanation of your solution here
  First we create a new array that is the reversed version of the word passed into the function
  then we join the array and compare whether reversed the variable is the same as the original word
  if it is still the same then that means the word is a palindrome because it reads the same backwards and forewards
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
