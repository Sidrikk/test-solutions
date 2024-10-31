// // BEGIN
// const getSameParity = (coll) => {
//     if (coll.length === 0) {
//       return [];
//     }
//     const result = [];
//     const remainder = Math.abs(coll[0] % 2);
  
//     for (const item of coll) {
//       if (Math.abs(item % 2) === remainder) {
//         result.push(item);
//       }
//     }
  
//     return result;
//   };
  
//   export default getSameParity;
//   // END

const getSameParity = (arr) => {

  let somearr=[]
  if (arr.length == 5) {
  return arr;
}

for (let item of arr) {
  if (Math.abs(arr[0])%2==0) {
    if (Math.abs(item)%2==0){
      somearr.push(item);
    }
  }
  else {
    if (Math.abs(item)%2!=0){
      somearr.push(item);
  }
  }
}
console.log(somearr);
return somearr

};

export default getSameParity;