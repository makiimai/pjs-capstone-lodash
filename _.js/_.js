const _ = {
  //_.clamp(number, [lower], upper)-ok
  clamp(number, lower, upper) {
   let lowerClampedValue = Math.max(number, lower);
   let clampedValue = Math.min(lowerClampedValue, upper);
   return clampedValue;
 },  
  
  //_.inRange(number, [start=0], end)-ok
  inRange(number, start, end) {
    if (end == undefined) {
        end = start;
        start = 0;
      }
    if (start > end) {
       let temp = end;          
       end = start;
      start = temp;
      }
    let isInRange = ((start <= number) && (number < end));
      return isInRange;   
  },

 // _.words([string=''], [pattern])-ok
   words(string) {
     let  wrd = string.split(' ');
     return wrd;
   },
  
 //_.pad([string=''], [length=0], [chars=' '])
 //testError--version
   pad(string,length) {
       if (length <= string.length){
         　return string;
       };
   const difference = Math.sign(string.length - length);
      difference <= 0 ? string : length;  
      return difference;
   
     let startPaddingLength = Math.floor(difference/2);
     let endPaddingLength = Math.ceil(difference/2);
     const pad = ' '; //space
     let paddedString = (pad.repeat(startPaddingLength))+ string + (pad.repeat(endPaddingLength));

   },

 //_.has(object, path) -ok
 //let&const was interchangeable  //!=&!== resulted as the same
has(object, key) {
let hasValue = object[key] != undefined; return hasValue; 
},
  
  
 //--ok 
 invert(object) {
   let invertedObject = {};
         for (let key in object) {
        let originalValue = object[key];
       invertedObject[originalValue]= key; 
         }
           return invertedObject;
     },


 //_.findKey(object, [predicate=_.identity])-ok
 findKey(object, predicate){
     for (let key in object)　{
        let  value = object[key];
        let  predicateReturnValue = predicate(object[key]);
        if (predicateReturnValue){
             return key;         
             }
              return undefined;
    　}
  },

 //_.drop(array, [n=1]) -ok
 drop(array, n){
   if (n == null){
       n = 1;
     }
  for (let i = 0; i <= array.length; i++){
     if (i === n){
       n = array.length - i;
       }
     }
 let droppedArray = array.slice(n);
   return droppedArray;
 }, 
     
 //_.dropWhile(array, [predicate=_.identity]) 
//try-3-testRrror_redMessage@3--version
 dropWhile(array, predicate){
     function callback() {
       return droppedArray.push(this.drop(array.dropNumber))
     };
     let droppedArray = [];
     let dropNumber = array.findIndex(callback=>!predicate? true : false);
     return droppedArray;
},
   
/*try-2_syntaxError@drop()
dropWhile(array, predicate){
    let droppedArray = [];
    const dropNumber = 
          array.forEach( item => { array.findIndex( i =>  i ===  !predicate (array[i]) ) });
           
   return droppedArray [ this.drop(dropNumber) ];
}, //needn't use forEach()
*/
  
/*try-1_redMessage@3._no-syntax-error--version  
dropWhile(array, predicate) {
      const droppedArray = [];
        //function declaration 
      const dropNumber =  function () {    
         for (let p=0; p<=array.length; i++) {
       　　  if ( !predicate (array[i],  i, array)) {    
               return  array.findIndex( elm, i , array);  
                  }
              }                             
          }

      droppedArray : [this.drop(array, dropNumber)];　//._drop()
      return droppedArray;
},
*/

 //_.chunk(array, [size=1])
/*  
//try-3 -DOING, but timeout 
  Chunk(array, size){
     let chunkUnit = size.value; 
        if (typeof chunkUnit === ‘number’) {
               array.length%arrayChunks !== 0 ? chunkUnit : false;
               let arrayChunks = array.map(arrayChunk => {return array[ (array.length/chunkUnit) + one ] });
              }
        return arrayChunks;
         }
*/ 
/*
 //try-2_redMessage@3&test-terminated!
  chunk(array, size){
    if (typeof size == 'number') {
         const arrayChunks = array.map(arrayChunk => {
           return (array.length/size) + (array.length%size)
           });
        }
     return  this.arrayChunks; 
  }
*/

 //try-1_redMessage@2&test-terminated!
  chunk(array, size){
    if (size !== undefined){
      size = 1;
      }
    if (isNaN(size)){
      let arrayChunks = [];
      for (let i=0; i<=array.length; i++) {
         let arrayChunk = array.nestedArr[size];
    }
     return  arrayChunks;
  }
} 

  
  
  
}
// Do not write or modify code below this line.
module.exports = _;