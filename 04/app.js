const currentYear = new Date().getFullYear();

const years = [1980, 1934, 2002, 2019];

const yearsPassed  = years.map((element) => currentYear - element);

console.log(yearsPassed);