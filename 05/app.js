const numbers = [1, 2, 3, 4, 5, 6, 7];

const filterNumbers = numbers.filter(function(value) {return value % 2 === 0 });
console.log(filterNumbers);
let total = 0;
filterNumbers.forEach(function(value) {return total += value});
console.log(total);

const reduceNumbers = numbers.reduce(function(sum, value) {
    if (value % 2 == 0){
        return sum + value;
    }
    return sum;
}, 0);


console.log(reduceNumbers);