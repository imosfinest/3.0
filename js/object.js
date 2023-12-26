/* const fName = `Goodness`;
      const lName = `Opara`;
      const country = `Nigeria`;
      const stateOfOrigin = `Imo`; */

const studentInfo = {}; // empty object
const studentInfo1 = {
  fName: `Goodness`,
  lName: `Opara`,
  country: `Nigeria`,
  stateOfOrigin: `Imo`,
  age: 40,
  phoneNumber: `+2347873938`,
  eduQualification: {
    pry: `2022 - 2023`,
    sec: `2003 - 2009`,
    uni: `2011 -2015`,
  },
  familyInfo: {
    husbandName: `Braspits`,
    children: {
      firstChildName: `Obi`,
      sec: `Uche`,
    },
  },

  // this function inside this object is called a method
  // greet: function () {
  //   alert("good morning");
  // },

  greet1: function (language) {
    alert(language);
  },
};
console.log(typeof studentInfo1);
console.log(studentInfo1);
console.log(studentInfo1.fName);

// document.body.innerHTML = studentInfo1;
// document.body.innerHTML = studentInfo1.lName;
// document.body.innerHTML = studentInfo1.eduQualification.pry;
// document.body.innerHTML = studentInfo1.familyInfo.children.sec;

console.log(studentInfo1.greet1); // accessing a property.
// console.log(studentInfo1.greet1("good morning")); // access a function

const english = "good morning";
// console.log(studentInfo1.greet1(english)); // passing a variable into out method.
