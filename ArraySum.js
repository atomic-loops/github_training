const ArraySum = (arr) => {
  try {
    return arr.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  } catch (error) {
    console.log(error);
  }
};

console.log(ArraySum([1, 2, 3, 4, 5, 6]));
