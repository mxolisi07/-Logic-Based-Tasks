// The first Part of the Task
// Declare an array of numbers
const arrays = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193,
  190, -190, 210, 34, 67, 3, 78, 210, 34, 34,
  50, 59, 89, 87, 230, 210, 100, 23, 980];

console.log("The Original Arrays:");
console.log(arrays);

// A new array that reverses the order of the elements in the original array

let reversedArray = [];
for (let i = arrays.length - 1; i >= 0; i--) {
  reversedArray.push(arrays[i]);
}
console.log("Reversed Array:");
console.log(reversedArray);

console.log("\n");

// Sort the array in ascending order
let sortedArrayAsce = arrays.sort(function (a, b) {
  return a - b;
});
console.log("Ascending Sorted Arrays:");
console.log(sortedArrayAsce);

console.log("\n");

// Sort the array in descending order
let sortedArrayDesc = arrays.sort(function (a, b) {
  return b - a;
})
console.log("Descending Sorted Arrays:");
console.log(sortedArrayDesc);

console.log("\n");

// Return an array with only unique values
const uniqueNumbers = arrays.filter((value, index) => {
  return arrays.indexOf(value) === index;
});
console.log("Unique Numbers:");
console.log(uniqueNumbers);

console.log("\n");

// Calculate the sum of all values in the array
let sum1 = arrays.reduce(myFunction);
function myFunction(total, value) {
  return total + value;
}
console.log("Sum of All Values in the Array:");
console.log(sum1);

console.log("\n");

// Return a new array with values less than or equal to 100
let lessThanOrEqualTo = arrays.filter(lessValues);

function lessValues(value) {
  return value <= 100;
}
console.log("Values Less Than or Equal to 100:");
console.log(lessThanOrEqualTo);

console.log("\n");

// Return a new array with values greater than 50
let greaterThan50 = arrays.filter(greaterValues);

function greaterValues(value) {
  return value > 50;
}
console.log("Values Greater Than 50:");
console.log(greaterThan50);

console.log("\n");

// Return a new array with elements that are divisible by 2
let divisibleBy2 = arrays.filter(checkDivisability);

function checkDivisability(value) {
  return value % 2 === 0;
}
console.log("Values Divisible by 2:");
console.log(divisibleBy2);

console.log("\n");

// Return a new array with elements that are divisible by 3
let divisibleBy3 = arrays.filter(checkDivisability1);

function checkDivisability1(value) {
  return value % 3 === 0;
}
console.log("Values Divisible by 3:");
console.log(divisibleBy3);

console.log("\n");

// Return a new array with elements that are neither divisible by 2 nor by 3
let notDivisibleBy2Or3 = arrays.filter(checkDivisability2);

function checkDivisability2(value) {
  return value % 2 !== 0 && value % 3 !== 0;
}
console.log("Values Not Divisible by 2 or 3:");
console.log(notDivisibleBy2Or3);

console.log("\n");

// Declare a variable that counts the number of elements in the array
let count = arrays.length;
console.log("Number of Elements in the Array:");
console.log(count);


console.log("\n");
console.log("\n");

// The second Part 2 of the Task
// Declare an array of mixed data types
const secArrays = [7, 10, "Clentan", 13, 89, true, 45, false,
  "Jerry", "Vukona", "Reabetswe", 600]

console.log("Display the mixed types original Arrays-->");
console.log(secArrays);

console.log("\n");

// Using a for loop and variable, return numbers of elements in the array
let numbersOnly = [];
for (let i = 0; i < secArrays.length; i++) {
  if (typeof secArrays[i] === "number") {
    numbersOnly.push(secArrays[i]);
  }
}
console.log("Numbers only in the Mixed Types Array-->");
console.log(numbersOnly);

console.log("\n");

// Using a while loop and variable, return strings of elements in the array
let stringOnly = 0;
while (stringOnly < secArrays.length) {
  if (typeof secArrays[stringOnly] === "string") {
    console.log("Strings only in the Mixed Types Array-->");
    console.log(secArrays[stringOnly]);
  }
  stringOnly++;
}

console.log("\n");

// Using a do while loop and variable, return the sum of values
let sum2 = 0;
let index = 0;
do {
  if (typeof secArrays[index] === "number") {
    sum2 += secArrays[index];
  }
  index++;
} while (index < secArrays.length);
console.log("Sum of Numbers in the Mixed Types Array-->");
console.log(sum2);

console.log("\n");

// Combine all the letters to form a proper greeting message
let names = []; // variable to store strings
for (let i = 0; i < secArrays.length; i++) {
  if (typeof secArrays[i] === "string") {
    names.push(secArrays[i]);
  }
}

let greeting = "Hello, "; // If more than one name, join with commas and "and"
if (names.length > 1) {       
  greeting += names.slice(0, -1).join(", ") + ", and " + names[names.length - 1] + ".";
} else if (names.length === 1) {
  greeting += names[0] + ".";
}
console.log("Greeting Message-->");
console.log(greeting);

console.log("\n");

// Remove all values in the array that are strings
let noStrings = []; // new variable to store non-string values
for (let i = 0; i < secArrays.length; i++) {
  if (typeof secArrays[i] !== "string") {
    noStrings.push(secArrays[i]);
  }
}
console.log("Removed values of strings in the array -->");
console.log(noStrings);

console.log("\n");
console.log("\n");


// The third Part of the Task
//The copied object

const developers = [
  {
    name: "Vee",
    laptops: ["Dell"],
    phones: ["Samsung", "Xiaomi"],
    computerSetups: [
      { brand: "Lenovo", monitors: 1, keyboards: 1, mice: 1, speakers: 1 }
    ]
  },
  {
    name: "Katlego",
    laptops: ["HP", "Samsung"],
    phones: ["Apple", "Samsung", "Tecno", "Samsung"],
    computerSetups: [
      { brand: "Lenovo", monitors: 2, keyboards: 1, mice: 1, speakers: 2 },
      { brand: "Dell", monitors: 1, keyboards: 1, mice: 1, speakers: 1 }
    ]
  },
  {
    name: "Rethabile",
    laptops: ["Samsung"],
    phones: ["Samsung", "Huawei", "Poco"],
    computerSetups: [
      { brand: "Asus", monitors: 1, keyboards: 1, mice: 1, speakers: 1 },
      { brand: "Acer", monitors: 1, keyboards: 1, mice: 1, speakers: 2 }
    ]
  },
  {
    name: "Gift",
    laptops: [],
    phones: ["Samsung"],
    computerSetups: [
      { brand: "Acer", monitors: 3, keyboards: 1, mice: 1, speakers: 2 },
      { brand: "HP", monitors: 2, keyboards: 1, mice: 1, speakers: 2 }
    ]
  },
  {
    name: "Thokozile",
    laptops: ["Lenovo"],
    phones: ["Apple"],
    computerSetups: [
      { brand: "Dell", monitors: 1, keyboards: 1, mice: 1, speakers: 2 },
      { brand: "Asus", monitors: 1, keyboards: 0, mice: 1, speakers: 1 },
      { brand: "Dell", monitors: 1, keyboards: 1, mice: 1, speakers: 1 }
    ]
  }
];

console.log("This is the original object -->");
for (let dev of developers) {
  console.log(dev);
}

console.log("\n");

// Create an array with just the names of developers
let developerNames = []
for (let i = 0; i < developers.length; i++){
  developerNames.push(developers[i].name)
}
console.log(developerNames);

console.log("\n");

//Count the number of incomplete setups
let incompleteCount = 0;
for (let i = 0; i < developers.length; i++) {
  for (let j = 0; j < developers[i].computerSetups.length; j++) {
    let setup = developers[i].computerSetups[j];
    if (setup.monitors === 0 || setup.keyboards === 0 || 
      setup.mice === 0 || setup.speakers === 0) {
      incompleteCount++;
    }
  }
}
console.log("Incomplete setups: " + incompleteCount);

console.log("\n");

// Check most trusted phone brand in the object
let phoneCounts = {};
let mostTrusted = "";
let maxCount = 0;

for (let i = 0; i < developers.length; i++) {
  for (let j = 0; j < developers[i].phones.length; j++) {
    let phone = developers[i].phones[j];
    if (phoneCounts[phone]) {
      phoneCounts[phone]++;
    } else {
      phoneCounts[phone] = 1;
    }
    if (phoneCounts[phone] > maxCount) {
      maxCount = phoneCounts[phone];
      mostTrusted = phone;
    }
  }
}

console.log("Most trusted phone brand: " + mostTrusted);

console.log("\n");

// Check the least trusted phone brand
let phoneCounts2 = {};
let leastTrusted = "";
let minCount = Infinity;

for (let i = 0; i < developers.length; i++) {
  for (let j = 0; j < developers[i].phones.length; j++) {
    let phone2 = developers[i].phones[j];
    if (phoneCounts2[phone2]) {
      phoneCounts2[phone2]++;
    } else {
      phoneCounts2[phone2] = 1;
    }
  }
}

for (let brand in phoneCounts2) {
  if (phoneCounts2[brand] < minCount) {
    minCount = phoneCounts2[brand];
    leastTrusted = brand;
  }
}

console.log("Least trusted phone brand: " + leastTrusted);

console.log("\n");

// How people without phones
for (let i = 0; i < developers.length; i++) {
  if (developers[i].phones.length === 0) {
    console.log(developers[i].name + " has no phones.");
  }
}

console.log("\n");

// How many without laptops
for (let j = 0; j < developers.length; j++) {
  if (developers[j].laptops.length === 0) {
    console.log(developers[j].name + " has no laptops.");
  }
}

console.log("\n");
// Those without computer setup(Desktop)
let noSetupCount = 0;

for (let i = 0; i < developers.length; i++) {
  if (developers[i].computerSetups.length === 0) {
    console.log(developers[i].name + " has no computer setup.");
    noSetupCount++;
  }
}

console.log("Total without computer setup: " + noSetupCount);

console.log("\n");

// Developers with the most total gadgets.
let mostGadgetsDev = "";
let maxGadgets = 0;
let gadgetsList = {};

for (let i = 0; i < developers.length; i++) {
  let dev = developers[i];
  let total = dev.phones.length + dev.laptops.length;

  // count gadgets in setups
  for (let j = 0; j < dev.computerSetups.length; j++) {
    let setup = dev.computerSetups[j];
    total += setup.monitors + setup.keyboards + setup.mice + setup.speakers;
  }

  // store gadgets list
  gadgetsList[dev.name] = {
    phones: dev.phones,
    laptops: dev.laptops,
    setups: dev.computerSetups
  };

  if (total > maxGadgets) {
    maxGadgets = total;
    mostGadgetsDev = dev.name;
  }
}

console.log("Developer with most gadgets: " + mostGadgetsDev);
console.log("All gadgets:", gadgetsList[mostGadgetsDev]);

console.log("\n");

// The developer with most phones
let mostPhonesDev = "";
let maxPhones = 0;
let phonesList = [];

for (let i = 0; i < developers.length; i++) {
  let count = developers[i].phones.length;
  if (count > maxPhones) {
    maxPhones = count;
    mostPhonesDev = developers[i].name;
    phonesList = developers[i].phones;
  }
}

console.log("Developer with most phones: " + mostPhonesDev);
console.log("Phones:", phonesList);

console.log("\n");

// Developer with the most computer setups
let mostSetupsDev = "";
let maxSetups = 0;
let setupsList = [];

for (let i = 0; i < developers.length; i++) {
  let count = developers[i].computerSetups.length;
  if (count > maxSetups) {
    maxSetups = count;
    mostSetupsDev = developers[i].name;
    setupsList = developers[i].computerSetups;
  }
}

console.log("Developer with most computer setups: " + mostSetupsDev);
console.log("Computer setups:", setupsList);

console.log("\n");

// Check the developer with most monitors
let mostMonitorsDev = "";
let maxMonitors = 0;

for (let i = 0; i < developers.length; i++) {
  let totalMonitors = 0;

  for (let j = 0; j < developers[i].computerSetups.length; j++) {
    totalMonitors += developers[i].computerSetups[j].monitors;
  }

  if (totalMonitors > maxMonitors) {
    maxMonitors = totalMonitors;
    mostMonitorsDev = developers[i].name;
  }
}

console.log("Developer with most monitors: " + mostMonitorsDev);
console.log("Monitor count: " + maxMonitors)