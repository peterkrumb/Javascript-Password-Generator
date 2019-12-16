# Javascript-Password-Generator

# My goal with this project is to create a password generator that takes into account different characters such as upper and lowercase letters, numbers and special characters by asking the user which of the characters they would like in their secure password, as well as how long they would like it to be.

## Variables
My first step was to create the global variables, or variables used throughout the script. These included arrays of every uppercase and lowercase letters, numbers and symbols as well as 2 empty arrays, one to gather the elements the user chose, and the other for the final password itself.

## Prompts and Confirms
The first question asked is how long the user would like the password to be. I chose this as the first question because if they fail this or don't meet the parameters they keep getting asked until they do. From there they enter confirm prompts on which type of characters they want. An if conditional is then set up based on their choices and using concat they are entered into the empty array mentioned above.

## Math loop
The final step is a for loop using math floor and math random to take the information we've gathered thus far and randomize it, then entering it into the empty variable called newPassword. We then set the empty text area from the html as equal to the newpassword so it shows up there.

## Copy to Clipboard
The copy to clipboard part was setup so that when you clicked Copy to clipboard it activated the copyPass function which selects, then copies, then alerts the user the password has been copied.