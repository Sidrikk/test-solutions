// BEGIN
export const swap = (items) => {
    if (items.length < 2) {
      return items;
    }
    const lastIndex = items.length - 1;
    const last = items[lastIndex];
    items[lastIndex] = items[0];
    items[0] = last;
  
    return items;
  };
// END