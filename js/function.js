// 1. FUNCTION DECLARATION
// a.
function greet() {
  alert("welcome");
}
// greet(); // calling this function will make the page load automatically.

// b. this greeting will run only when the user clicks on the button not when the page loads. we called it using an onClick event added to the html button tag.
function greet() {
  let name = `Goodness`;
  alert(`welcome ${name} pleased to see you`);
}

// c. The function above is static because it will greet only Goodness, to make it dynamic, i.e have it greet anyone regardless, we intruduce parameters. re- writing the code above,
function greet(name) {
  alert(`welcome ${name} pleased to see you`);
}

// 2. ARROW FUNCTION
// recreating the above function to an arrow function
const greet1 = (fname) => {
  alert(`hello ${fname} i'm pleased to see you.`);
};
// greet1("goody"); // displaying and passing a parameter to the arrow function. This funcation will pop up on page load. To make it pop up onClick, we do the same as the previous.

// e. re-writing the arraow function above,
const greet2 = (fname) => alert(`hello ${fname} i'm pleased to see you.`);

// f. to avoid our function running with an undefined result, we can pass in a default value. like this,
function greet(name = "Friend") {
  alert(`welcome ${name} pleased to see you`);
}

// g. hoisting (a mojor advantage function declaration has over an arrow function.)
greet(); // function called before declarations.
function greet(name = "Friend") {
  alert(`welcome ${name} pleased to see you`);
}

// 3. ANONYMOUS FUNCTIONS(Used as call back functions.)
// a.
// function(name){
// }

// b. same as
() =>
  // the functions a and b above, are anonymous functions of this below.
  greet();
function greet(name = "Friend") {
  alert(`welcome ${name} pleased to see you`);
}

// this is an anonymous function (used as a call back function inside the property of an object) copied from the object file.
// it will be wrong to attach a name after the function key word

// this is illustrating the use of an arrow function in an array method.
console.log(africanFoodss.filter((foo) => foo === "starch"));

// this can also work
function circleArea() {
  let r = 2;
  area = 2 * Math.PI * r * r;
  console.log(area);
}
circleArea();

// 2.
let userName = "Goodness";

function showMessage() {
  userName = "Opara";

  let message = "Hello, " + userName;
  console.log(message);
}
console.log(userName);
showMessage();
console.log(userName);

// 3.
