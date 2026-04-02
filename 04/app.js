const years = [1980, 1934, 2002, 2019];

const diffYears = years.map(countYears);

console.log(diffYears);

function countYears(year) {
    const currentYear = 2026;
    const countedYears = currentYear - year;
    return countedYears;
}