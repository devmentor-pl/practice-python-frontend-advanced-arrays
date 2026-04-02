const n = 100;
const oddNumbers = [];

for(let i=1; i<n; i+=2){
    oddNumbers.push(i);
}

console.log(oddNumbers);

console.log('First element:', oddNumbers[0]);
console.log('Last element:', oddNumbers[oddNumbers.length-1]);