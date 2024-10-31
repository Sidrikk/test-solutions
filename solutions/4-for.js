// BEGIN
export default (coll, prefix) => {
    const result = [];
  
    for (let i = 0; i < coll.length; i += 1) {
      result[i] = `${prefix} ${coll[i]}`;
    }
  
    return result;
  };
  // END