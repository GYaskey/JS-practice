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

function calculateTotal(number) {
  let total = 0;
  for (let add = 1; add <= number; ++add) {
    total += add;
  }
  return total;
}

console.log(calculateTotal(10));
