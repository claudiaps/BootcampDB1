const array = [9, 4, 5, 10, 2, 90, 8, 6, 33, 20, 8, 10, 4, 7, 8, 50, 87, 43];

const maiores20 = array.filter((number) => number > 20);
const menores20 = array.filter((number) => number <= 20);

console.log("Números maiores que 20:", maiores20);
console.log("Números menores que 20:", menores20);
