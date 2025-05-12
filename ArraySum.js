const ArraySum = (numbers) =>{
    try {
        let sum = 0;
        for(let i=0;i<numbers.length;i++){
            sum += numbers[i];
        }
        return sum;
    } catch (error) {
        console.log(error);
        return;
    }
}

export {
    ArraySum
}