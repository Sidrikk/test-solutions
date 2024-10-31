// BEGIN
export const calculateSum = (coll) => {
    let sum = 0;
    for (let i = 0; i < coll.length; i += 1) {
      const value = coll[i];
      if (value % 3 === 0) {
        sum += value;
      }
    }
  
    return sum;
  };
  // END