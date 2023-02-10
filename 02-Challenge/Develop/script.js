// Assignment code here
// arrays of available characters
const lowercaseChar = arrayPusher(97,122);
const uppercaseChar = arrayPusher(65,90)
const specialChar = arrayPusher (33,47).concat(arrayPusher(58,64)).concat(arrayPusher(92,96))
const numbers= arrayPusher(48,57)
let okChar= lowercaseChar

//generate function
function generatePassword(){
  //number of characters for our password will be selected via the prompt
 let numCha = prompt("How many characters would you like?", 'Choose a number between 1 & 15')
//sets base array for allowed characters

// checks value of number of characters to see if chosen number fits within parameters 1-15
 if (0<numCha<15) {
  //Creates boolean value for additional character sets
 let upperOK= confirm("Would you like to include uppercase letters?")
 let numberOK= confirm("Would you like to include numbers?")
 let specialOK= confirm("Would you like to include symbol characters?")

 //adds additional allowed characters to the base okChar array
 if (upperOK === true) {okChar = okChar.concat(uppercaseChar)
}
 if (numberOK === true) {okChar = okChar.concat(numbers)
}
 if (specialOK === true) okChar = okChar.concat(specialChar)


// checks to see if at least one additional character set was selected
if (upperOK === true || specialOK === true ||numberOK == true){
  // sets up an array for characters selected for the password
 const passwordChars= []

 //selects characters for the passwordChars array 
 for (i=0; i< numCha; ++i) {
  //randomizes characters for each index
  const characterCode= okChar[Math.floor(Math.random() * okChar.length)]
  //pushes randomized characters to the passwordChars array
  passwordChars.push(String.fromCharCode(characterCode))
  }
  return passwordChars.join('')
  }
  else {
    alert('For a stronger password please select at least one additional variable')
  }
    }
}
function arrayPusher(low,high) {
  const array = [] 
  for( i = low; i<=high; i++){
    array.push(i)
  }
  return array
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Math.floor(Math.random())
//parseInt
//ParseFLoat
//.split
//https://www.youtube.com/watch?v=iKo9pDKKHnc&t=316s