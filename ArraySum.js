const ArraySum = (arr) =>{
    return arr.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue;
    }, 0);
}

console.log(ArraySum([1,2,3,4,5,6]))