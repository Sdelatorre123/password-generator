// Assignment code here

//arrays containing characters possible 
var uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialCharacters = ['~','`','!','@','#','$','%','^','&','*','(',')','-','_','+','=','{','}','[',']','|',',',':',';','"','<','>','.',',','?'];
var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];

var password = ""; //password string
var selectedCharacters = []; //array containing concacted arrays chosen
var passwordLength = 0; 
var generateBtn = document.querySelector("#generate");



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  chooseLength();
  if(passwordLength > 8 && passwordLength < 129) {
    chooseCharacters();
  }
  if(selectedCharacters.length > 0) { //stop from displaying on window if password length undefined
    for(var i=0; i<passwordLength; i++) {
      password = password + selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
  }
}
return password;
}

function chooseLength() {
  
  passwordLength = prompt("How long would you like your password to be? Choose between 8 and 128.")
  if(passwordLength === null) {
    alert("Oh, I guess you changed your mind.");
    return;
  }
  if(passwordLength === "") {
    alert("Please enter a number before you click OK");
    return;
  }
  if(passwordLength === "0") {
    alert("How are we supposed to make a password 0 characters long? Do better.");
    return;
  }
  if(isNaN(passwordLength)) {
    alert("Did your cat get ahold of your keyboard? Numbers only please.");
    return;
  }
  else if(passwordLength < 8) {
    alert("A brute force cracker could determine that password in less than 4 days. Try typing a number between 8 and 128 next time.");
    return;
  }
  else if(passwordLength > 128) {
    alert("Thats a bit much. Try typing a number between 8 and 128 next time.");
    return;
  }
  else {
    alert("Your password will be " + passwordLength + " beautiful characters long.");
  }
}


// confirm booleans for whether or not the user wants to include uppercase, lowercase, special, and numeric characters.
function chooseCharacters() {
  var isUppercase = confirm("Would you like to use Uppercase Characters?");
  var isLowercase = confirm("Would you like to use Lowercase Characters?");
  var isSpecial = confirm("Would you like to use Special Characters?");
  var isNumeric = confirm("Would you like to use Numeric Characters?");

 if(isUppercase) {
    selectedCharacters = selectedCharacters.concat(uppercaseCharacters);
    alert("Your password will include Uppercase Characters");
  }
  
  if(isLowercase) {
    selectedCharacters = selectedCharacters.concat(lowercaseCharacters);
    alert("Your password will include Lowercase Characters");
  }
  
  if(isSpecial) {
    selectedCharacters = selectedCharacters.concat(specialCharacters);
    alert("Your password will include Special Characters");
  }
  
  if(isNumeric) {
    selectedCharacters = selectedCharacters.concat(numericCharacters);
    alert("Your password will include Numeric Characters");
  }

  if(isUppercase + isLowercase + isSpecial + isNumeric === 0) {  //if no characters chosen do not continue
    alert("Oh, I guess you changed your mind.");
    return;
  }
}

generateBtn.addEventListener("click", writePassword);

