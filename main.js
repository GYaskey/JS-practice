// function getFileName(file) {
//   if (file.indexOf("." !== -1)) {
//     let dottPlace = file.indexOf(".");
//     return file.slice(0, dottPlace);
//   }
//   return file;
// }

// function getFileName(file) {
//   let dottPlace = file.indexOf(".");
//   if (dottPlace === -1) {
//     return file;
//   }
//   return file.slice(0, dottPlace);
// }

// const result = getFileName("app");
// console.log(result);

// function calculateTotal(number) {
//   let total = 0;
//   let addition = 1;
//   while (addition <= number) {
//     total += addition;
//     addition += 1;
//   }
//   return total;
// }

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// for (let i = 20; i >= 0; i -= 5) {
//   console.log(i);
// }

// function calculateTotal(number) {
//   let total = 0;
//   for (let add = 1; add <= number; ++add) {
//     total += add;
//   }
//   return total;
// }

// console.log(calculateTotal(10));

// let array = [1, 2, 3, 4, 5];

// console.log(typeof array);

// function result(params) {
//   return;
// }

// console.log(result);

// params = ["w", "e", "r", "t", "t"];

// console.log(typeof params);

// let planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

// planets = "Hello";

// console.log(planets);

// function calculateTotalPrice(order) {
//   let result = 0;
//   for (let index = 0; index < order.length; index++) {
//     result += order[index];
//   }
//   return result;
// }

// const totalPrice = calculateTotalPrice([164, 48, 291]);
// console.log(`Total price: ${totalPrice}`);

//TODO:=========task-01=================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив

// const numbers = [2, 5, 35, 56, 12, 1, 24, 7, 80, 3];

// function findSmallerNumber() {
//   let;
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
// }

// for (const key in apartment) {
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (let key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values);

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   let result = 0;

//   for (let item of products) {
//     if (item.name === productName) {
//       result = item.price;
//     }
//   }
//   return result;
// }

// console.log(getProductPrice("Radar")); // Виведе: 1300
// console.log(getProductPrice("Scanner")); // Виведе: 2700
// console.log(getProductPrice("Droid")); // Виведе: 400
// console.log(getProductPrice("Grip")); // Виведе: 1200
// console.log(getProductPrice("Unknown")); // Виведе: 0, тому що продукт не знайдено

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   let result = 0;

//   for (let item of products) {
//     if (item.name === productName) {
//       result = item.price;
//     }
//   }
//   return result;
// }

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   let result = [];

//   for (let item of products) {
//     if (propName === "name") {
//       result.push(item[propName]);
//     } else if (propName === "price") {
//       result.push(item[propName]);
//     } else if (propName === "quantity") {
//       result.push(item[propName]);
//     }
//   }

//   return result;
// }

// console.log(getAllPropValues("price"));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let total = 0;
//     for (let item of this.potions) {
//       total += item.price;
//     }
//     return total;
//   },
// };

function addOverNum(value, ...args) {
  let res = 0;
  for (let arg of args) {
    if (arg > value) {
      res += arg;
    }
  }
  return res;
}

console.log(addOverNum(15, 32, 6, 13, 19, 8));
