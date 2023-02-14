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
 let numCha = prompt("How many characters would you like?", 'Choose a number between 8 & 20')
//sets base array for allowed characters

// checks value of number of characters to see if chosen number fits within parameters 8-20
 if (7<numCha && numCha<21) {
  //Creates boolean value for additional character sets
 let upperOK= confirm("Would you like to include uppercase letters?")
 let numberOK= confirm("Would you like to include numbers?")
 let specialOK= confirm("Would you like to include symbol characters?")

 //adds additional allowed characters to the base okChar array
 if (upperOK === true) okChar = okChar.concat(uppercaseChar)

 if (numberOK === true) okChar = okChar.concat(numbers)

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
  //if no additional character sets are accepted, an alert will inform the user that they must choose at least one
  else {
    alert('For a stronger password please select at least one additional variable')
    //replaces placeholder text instead of "undefined"
    return placeholder="Your Secure Password"
  }
    }
    //If no value or a value outside of the range 8-20 is selected an alert will inform the user
    else {
      alert('Please select a number value between 8 and 20');
      // replaces placeholder text instead of "undefined"
      passwordChars.push(placeholder="Your Secure Password")
    }
}
//this function creates an array with all number between a low and high integer
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
  var password = generatePassword(); //creates a variable that represents the generated password function
  var passwordText = document.querySelector("#password"); // creates a variable that target the 'password' id in html

  passwordText.value = password;//changes the value of the password id in html to include the generated password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //creates the EventListener that will run the writepassword function if the generate button is clicked

//Math.floor(Math.random())
//parseInt
//ParseFLoat
//.split
//https://www.youtube.com/watch?v=iKo9pDKKHnc&t=316s