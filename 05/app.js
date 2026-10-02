const numbers = [1, 2, 3, 4, 5, 6, 7];

const sum = numbers
    .filter((element) => element % 2 === 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);
