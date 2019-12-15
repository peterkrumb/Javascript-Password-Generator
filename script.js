function generatePassword() {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specChar = "!#$%&/'()*+,-./:;<=>?@[]\^_`{|}~";
  var possibleOptions = [];
  var newPassword = ""

  var length = prompt('How long would you like your password to be? (Choose between 8 - 128 characters)');

  if (length === "" || length > 128 || length < 8) {
  alert("Enter a number between 8 - 128 characters");
  }

  else {

  var isOp1 = confirm("Would you like to include lowercase letters?");
  var isOp2 = confirm("Would you like to include uppercase letters?");
  var isOp3 = confirm('Would you like to include numbers?');
  var isOp4 = confirm('Would you like to include special characters? (!?*&...)');

  if (isOp1) {
    possibleOptions += lower;
    }
      
  if (isOp2) {
    possibleOptions += upper;
    }
      
  if (isOp3) {
    possibleOptions += numbers;
    }

  if (isOp4) {
    possibleOptions += specChar;
    }
      
  if (possibleOptions === "") {
    alert("You must select at least one criteria.");
      
    }

  } 



  for (var i = 0; i < length; i++) {
    newPassword = newPassword + possibleOptions.charAt(Math.floor(Math.random() * Math.floor(possibleOptions.length))); 
    

    //add newPassword to Generate Password box in displaypw text input//
    document.getElementById("display").value = newPassword;
  }
  
}

