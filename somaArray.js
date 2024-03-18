const array = [9, 8, 0, 6, 7, 50, 2, 1, 32];

const somaArray = array.reduce((acc, value) => {
  return acc + value;
}, 0);

console.log("Soma dos valores do array: ", somaArray);
