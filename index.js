//the prompt feature enables the user to enter a word
let  prompt = require('prompt-sync')();
let word = prompt('Enter name : ');

function isPalindrome(word) {
  // Write your algorithm here
  let re = /[^A-Za-z0-9]/g// is used to remove symbols and reamins only text
  word = word.toLowerCase().replace(re, '')//takes the word and changes it to lower case 
  //console.log(word)
  let len = word.length
  //console.log(len)

  for (let i = 0; i < len/2; i++) {
    if (word[i] !== word[len - 1 - i]) { // As long as the characters from each part match, the FOR loop will go on
        return false; // When the characters don't match anymore, false is returned and we exit the FOR loop
    }
  
  }
  return true
}
//isPalindrome(word)
/* 
  Add your pseudocode here


  add a promp to enable the user to enter names/words
  take the input 
  change the input toLowerCase()

  campare it if word isPalindrome return true
  to check a string is a palindrome ,we need to itarate over the string forward backward direction
  check if all forward and backwards characters match and return true 
  if else word do not match return false 
*/

/*
  Add written explanation of your solution here

  to check a word we need to remove all symbols, punctuation, all non alphanumerical values 
  turn the words in lower case
  we need a function and an if statment to loop backward and forward
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  // here we call the function and pass in the word from the input te be checked if its a palindrome for this will be true
  console.log("=>", isPalindrome(word));

 // console.log("");

  console.log("Expecting: false");
  // here we call the function and pass in the word from the input te be checked if its a palindrome for this it will be false
  console.log("=>", isPalindrome(word));
}

module.exports = isPalindrome;
