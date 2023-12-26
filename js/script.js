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

  // it is a function declaration kind of anonymous function. it will be wrong to try to add a name after the function KEY WORD.
  greet1: function (language) {
    alert(language);
  },
};
