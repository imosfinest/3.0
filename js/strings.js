// Generated sentences from lorem.
// Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!

// String methods
// 1. Length
let sentences =
  "Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!";

//   This method returns the number of characters in the string above, including empty spaces.
console.log(sentences.length); // it's output is - 121

// 2. Assessing characters -
let string =
  "Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!";
let firstLetter = string[0];
let lastIndex = string.length - 1;
// let lastIndex = string[string.length - 1]

// This method tells us the exact position of the first character in the string.
console.log(firstLetter); // It's output is 'G'

// This method tells us the number of characters we have left after one subtraction.
console.log(lastIndex); // it's output is - 120

// This method shows us the exact character occupying the last position of the string.
console.log(string[lastIndex]); // it's output is '!'
//  or let lastIndex = string[string.length - 1]
// console.log(lastIndex);

// 3. toUpperCase() - This method changes the case of the string from whatever case it's in to UPPERCASE.
console.log(string.toUpperCase()); // it's result is  "GENERATE LOREM IPSUM PLACEHOLDER TEXT. SELECT THE NUMBER OF CHARACTERS, WORDS, SENTENCES OR PARAGRAPHS, AND HIT GENERATE!"

// 4. toLowerCase() - This method changes the case of the string from whatever case it's in to LOWERCASE
console.log(string.toLowerCase()); //it's result is  "generate lorem ipsum placeholder text. select the number of characters, words, sentences or paragraphs, and hit generate!"

// Searching for strings
// 5. indexOf() - This method will look for the given substring in the string and return its position.
console.log(string.indexOf("Generate")); //It's result is -  0
console.log(string.indexOf("generate")); //It's result is -  112

// 6. lastIndexOf()
// There is no exact repeated substring so I can't test for lastIndexOf

// 7. includes() - This method returns true or false if it finds or doesn't find the given substring.
console.log(string.includes("Ipsum")); // The output for this is - true (Because we have Ipsum` as a substring)

console.log(string.includes("hipsum")); // The output for this is false - we have no "hipsum" in the string.

console.log(string.includes("ipsum")); //The output for this is false - the search is case sensitive.

// This method is checking to see if the given string can be found in the exact position specified.
console.log(string.includes("Generate", 1)); // false -  This is false because at position 1 there is no "Generate".

console.log(string.includes("Generate", 0)); // True - This is true because index 0 is the exact position of  "Generate".

// 8. startsWith and endsWith - This method is checking to see if the string starts and ends with a given substring.
console.log("Generate".startsWith("Gen")); // true - this is true because "Generate" starts with "Gen"
console.log("Generate".startsWith("gen")); // False - this is false because the search is case sensitive.
console.log("Generate".endsWith("e")); // true -  this is true because "Generate" ends in 'e'.

// 9. slice(), substr(),
// This slice method returns part of the string from index 0 to index 3, but it will not include the character at index 3
console.log(string.slice(0, 3)); //This it the output - 'Gen'

// Since a second argument is not passed this method will start from position 2 and run through the end of the string.
console.log(string.slice(2)); //This is the result "nerate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!"

// This method will return part of the string from position 2 to length 6.
console.log(string.substr(2, 6)); // This is the result "nerate"

// This method will count from the back, and from the third position it will get 2 character.
console.log(string.substr(-3, 2)); //te, this is the output.

// -----------------------CONTINUATION--------------------------
// 10. split()
// This method with an empty argument will change the entire string into an array.
console.log(string.split()); // [ "Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!" ]

// The split method having the "double quotes" and space in-between as an argument, will still change the string to an array quoting each word with a comma seperating them and spaces in-between.
console.log(string.split(" ")); // [ "Generate", "Lorem", "Ipsum", "placeholder", "text.", "Select", "the", "number", "of", "characters,", "words,", "sentences", "or", "paragraphs,", "and", "hit", "generate!"

// 11. trim - There are no empty spaces in my string so I can't test for trim.
// console.log(string.trim(""));

// 12. replace() - This method will replace the last word in the string which is "generate" to "produce".
console.log(string.replace("generate", "produce")); // Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit produce!

// 13. charAt - This method takes an index and return the value at that index.
console.log(string.charAt(17)); // the result is s - this is because the value occupying index 17 is s

// 14. charCodeAt - This method takes an index and return the character code using (ASCII number)of the value occupying that index.
console.log(string.charCodeAt(17)); // 115 - the character code for the value in index 17 is 115

// 15. concat - This method takes as many substrings as possible and joins them to the string. The end of the string has the concat argument "addsomelines"
console.log(string.concat("add", "some", "lines")); //Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!addsomelines

// 16. search - This method takes a substring as an argument and return the index of the first match of that substring.
console.log(string.search("placeholder")); // 21 - is the index of "placeholder" substring.

// 17. match - this method takes a substring as an argument and return an array if there is a match, if not it will return null.
console.log(string.match("Ipsum")); //  [ "Ipsum" ]
console.log(string.match("ipsum")); // null - the search is case sensitive, we do not have 'ipsum' starting with a small letter.

// 18. repeat - This method takes a number as an argument, and returns the string repeated according to the number of arguments passed.
console.log(string.repeat(2)); // Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate! - (This string is repeated twice).

// 19.

// concatenating strings
let a = "my name is Goodness";
let b = "I am pretty";
let c = "my name is Goodness, " + " I am pretty.";
console.log(c);

// constructing  strings with variables.
const ourName = "family";
const ourStr = "Hello, our name is " + ourName + ",";
console.log(ourStr);

let fullName = "ulo Madamee";
let sentence = "This is " + fullName + " house";
console.log(sentence);

// constructing  strings with variables, (interpolation). (backtick)
let sentence2 = `This is ${fullName} house`;
console.log(sentence2);

// Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks =
  "My " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
console.log(wordBlanks);
