const ArraySum = (numbers) => {
  try {
    return numbers.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  } catch (error) {
    console.log(error);
  }
};

export { ArraySum };
