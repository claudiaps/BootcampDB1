const array = [
  9, 4, 5, 10, 2, 80, 77, 6, 33, 20, 8, 10, 4, 7, 8, 50, 87, 43, 2, 1, 4,
];

const maiores20 = array.filter((number) => number > 20);
const menores20 = array.filter((number) => number <= 20);
const maiores50 = array.filter((number) => number > 50);

console.log("Números que são maiores que 20:", maiores20);
console.log("Números que são menores que 20:", menores20);
console.log("Números que são maiores que 50:", maiores50);
