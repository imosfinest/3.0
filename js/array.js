// a.
const array = [];

// b. this is an array of objects, it will return an object when logged to the console.
const studentsInfo = [
  {
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
  },
  {
    fName: `Hassan`,
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
  },
  {
    fName: `Udo`,
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
  },
];
console.log(typeof studentsInfo);

// ...........ARRAY METHODS............
// methods that work with the BEGINNING of an array

//  1.  shift() - this method REMOVES/GET an element from the begining of an array AND RETURNS THAT REMOVED ELEMENT.

// a.
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
console.log(ourArray);
console.log(removedFromOurArray);

//  2. UNSHIFT - This method adds an element to the beginning of the array. AND RETURNS THE NEW LENGTH.

// a.
const ourArray1 = ["Stimpson", "J", "cat"];
ourArray1.shift();
console.log(ourArray1);
ourArray1.unshift("Happy");
console.log(ourArray1);

// b.
const myArray = [
  ["John", 23],
  ["dog", 3],
];
myArray.shift();
console.log(myArray);
myArray.unshift(["Paul", 35]);
console.log(myArray);

// methods that work with the END of an array
//  3. push() - this method ADD an element to the end of the array AND RETURNS THE NEW LENGTH OF THE ARRAY..

// a.
const arr1 = [1, 2, 3];
arr1.push(4, 5);
console.log(arr1);

// b.
const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
console.log(arr2);

// c.
const arr3 = [
  ["John", 23],
  ["cat", 2],
];
arr3.push(["dog", 3]);
console.log(arr3);

// d.
let fruits = ["Apple"];
fruits.push("Orange", "Peach");
console.log(fruits);
fruits.unshift("Pineapple", "Lemon");
console.log(fruits);

// e.
const toDo = [];
toDo.push("go shopping");
toDo.push("go home");
console.log(toDo);
console.log(toDo.length);

// 4. pop() - this method TAKES an element from the end of the array

// a.
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

// b.
const arr4 = [
  ["John", 23],
  ["cat", 2],
];
const removedFromMyArray = arr4.pop();
console.log(arr4);
console.log(removedFromMyArray);

// ....LAMO'S ASSIGNMENT....More on Array methods

// The following array methods will perform there operations on the specified array of foods.

// Here is an array of foods
const africanFoods = ["Akpu", "Eba", "Semo", "Rice"];
const africanFoodsId = [777, 676, 899, 999];

//. 5 .length
console.log(africanFoods.length);

// METHOD 6 .indexOf() -  This method checks for the POSITION of the specified item in the array, if the specified item exsit, it's position (index) is returned, else it returns -1
console.log(africanFoods.indexOf("Rice"));
console.log(africanFoods.indexOf("Beans")); // -1 is the output because 'Beans' does not exsit in our array.

// 7 .includes() - This method checks if the specified item exsit in the array. If it does, it returns 'true' else it returns false.
console.log(africanFoods.includes("Eba")); // true because we have 'Eba'

// METHOD 8 .isArray() This method checks if the data type of our array is an array.
console.log(Array.isArray(africanFoods)); // true because our array is of data type array.

// 9 .copyWithin() This method will copy the number of items stated and place them in another position in the same array stated also. i.e this will copy the first two array items and place them to replace the last two array items.
console.log(africanFoods.copyWithin(2, 0)); // Array(4) [ "Akpu", "Eba", "Akpu", "Eba" ] - The result is an array of 4 items, the original last two replaced by the first two and the first two still remaining the same.

// 10 .entries()
// console.log(africanFoods.entries());

// 11 .fill() This method replaces the array with the 'ewedu' value.
console.log(africanFoods.fill("ewedu")); // ["ewedu", "ewedu", "ewedu", "ewedu"];

// 12 .at() This method gets the third item in the array using the specified index(2)
console.log(africanFoods.at(2)); // ewedu - note that the array has been replaced all through with 'ewedu'.

// 13 .flat()
// const foods = [milk, oat, shakes, [smoothies, juices]];
// console.log(foods.flat(2));

// 14 .toString() This method will simply convert the given array to a string returning the exact same elements in the array.
console.log(africanFoodsId.toString()); // "777,676,899,999"

//  15  .filter() - Filter returns a new copy of the given array
const africanFoodss = ["wheat", "starch", "tuwo", "fufu"];
// illustrating the use of an arrow function as an
console.log(africanFoodss.filter((foo) => foo === "starch"));
console.log(africanFoodss.filter((foo) => foo.length > 4));

// 16 .find() -  this method returns the first element in the provided array that satisfies the provided testing function.
console.log(africanFoodss.find((foo) => foo === "fufu"));
// 17 .forEach() - this is used to loop through each item in our array.
// 18 .concat() - Used to merge two or more arrays. the method does not change the existing arrays, but instead returns a new array
console.log(africanFoods.concat(africanFoodsId));

//
