// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChoice = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

function determineLength(){
  passLength = prompt("How many characters would you like your password to be? (between 8-128 characters): ");

    if (passLength<8){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (passLength>128){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (isNaN(passLength)){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else{
    alert("Choose the type of characters you'd like next. If you choose NO for all the following prompts, your password will only contain lowercase letters.");
    }
    return passLength;
}

function determineUppercase(){
  uppercaseCheck = prompt("Do you want to include uppercase letters in your password? (Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Please answer Yes or No");
      determineUppercase();

    }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineUppercase();
    }
    return uppercaseCheck;
}

function determineNumbers(){
  numberCheck = prompt("Do you want to include numbers in your password? (Yes or No)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer Yes or No");
      determineNumbers();

    }else if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineNumbers();
    }
    return numberCheck;
}

  console.log(passLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

function determineSpecial(){
  specialCheck = prompt("Do you want to include special characters in your password? (Yes or No)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Please answer Yes or No");
      determineSpecial();

    }else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineSpecial();
    }
    return specialCheck;
}

function generatePassword(){
  determineLength();


var characters = lowerCase;
var password = "";
if (uppercaseCheck && numberCheck && specialCheck){
  characters += upperCase + numChoice + specialChar;

}else if (uppercaseCheck && numberCheck){
  characters += upperCase + numChoice;

}else if (numberCheck && specialCheck){
  characters += numChoice + specialChar;

}else if (uppercaseCheck && specialCheck){
  characters += upperCase + specialChar;

}else if (uppercaseCheck){
  characters += upperCase;

}else if(numberCheck){
  characters += numberChar;

}else if (specialCheck){
  characters += specialChar;

}else{
  characters === lowerCase;
}

  for(var i = 0; i < passLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);