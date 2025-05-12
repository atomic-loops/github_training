const ArraySum = (numbers) =>{
    return numbers.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue;
    }, 0);
}

export {
    ArraySum
}