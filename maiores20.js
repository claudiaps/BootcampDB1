const array = [
  9, 4, 5, 10, 2, 90, 8, 6, 33, 20, 8, 10, 4, 7, 8, 50, 87, 43, 30, 40, 10, 2,
  54,
];

const maiores20 = array.filter((number) => number > 20);
const menores20 = array.filter((number) => number <= 20);
const menores30 = array.filter((number) => number <= 30);

console.log("Números maiores que 20:", maiores20);
console.log("Números menores que 20:", menores20);
console.log("Números menores ou iguais a 30:", menores30);
