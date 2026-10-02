function oddFilter(n){

    const oddNumbers = [];

    for(let i = 1; i <= n; i++){
        if(i% 2!== 0){
            oddNumbers.push(i);
        }
    }

    console.log(oddNumbers);
}


oddFilter(0);
oddFilter(1);
oddFilter(2);
oddFilter(3);
oddFilter(24);
oddFilter(25);
oddFilter(100);
oddFilter(101);