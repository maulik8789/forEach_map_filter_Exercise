/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/

function doubleValues(arr){
    let dbVal = [];
    arr.forEach(element => {
        dbVal[dbVal.length] =  (element * 2);
    });    
 return dbVal ;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    let ev = [];
    arr.forEach(element => {
       if(element % 2 ==0)
        ev[ev.length] = element; 
    });
    return ev;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    let fnl = [];
    arr.forEach(element => {
        fnl[fnl.length] = element[0]+element[element.length-1];
    });
return fnl ;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    let knv = [];
    var obj = {};
    obj[key] = value;
    arr.forEach(element => {
       element ={ ...element, ...obj };
       knv[knv.length] = element; 
    });
    console.log(knv);
    return knv
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
    let ch = [];
    ch = str.split('');

    let vA = 0, vE = 0, vI = 0, vO = 0, vU = 0;
    var obj = {};
    ch.forEach(element => {
        if (element == 'a' || element == 'A'){
        vA++;
        obj['a'] = vA;}
        else if(element == 'e' || element == 'E'){
        vE++
        obj['e'] = vE;}
        else if(element == 'i' || element == 'I'){
        vI++
        obj['i'] = vI;}
        else if(element == 'o' || element == 'O'){
        vO++
        obj['o'] = vO;}
        else if(element == 'u' || element == 'U'){
        vU++
        obj['u'] = vU;}
});
   return obj;
}


/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    let nArr = [];
    arr.map(function(element){
        nArr[nArr.length]=  element * 2;
    })
    return nArr;
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    let nArr = [];
    arr.map(function(element, index){
        nArr[nArr.length]=  element * index;
    })
    return nArr;
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    var result = arr.map(item => item[key]);
    return (result);   
    //alternate way 
    //let result = arr.map(function(item) 
    // {return item[key]});
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    let result = [];
    for(let i = 0; i< arr.length; i++){
        result[result.length] = Object.values(arr[i]).join(' ');
    }
    return (result);
}

//For reference
// let myMap = new Map().set('a', 1).set('b', 2).set(983, true)
// let keys = [...myMap.keys()]
// console.log(keys)

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') 
    // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    return arr.filter(function(ele) {
        return ele[key] != undefined;
      });
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    let f = 0;
    let key;
    arr.filter(function(el){
        if (el == searchValue){
            key= searchValue;
            f++;
        }
    });
    if(f = 0)
    return undefined;
    else
    return key;
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    let firstFound = [];
    arr.filter(function(el) {
        if (el[key] == searchValue)
        firstFound.push(el);
      });
      return firstFound[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    let cha = [];
    finalStr = '';
    cha = str.split('');
    let vA = 'A', vE = 'E', vI = 'I', vO ='O', vU = 'U';
    let va = 'a', ve = 'e', vi = 'i', vo ='o', vu = 'u';

    cha = cha.filter(function(item) {
        if (item != vA && item != vE && item != vI && item != vO && item != vU 
            && item != va && item != ve && item != vi && item != vo && item != vu)
        return item;
    });
    
    finalStr = cha.join('');
    finalStr = finalStr.toLowerCase();
return (finalStr);
// [ 1, 2, 4, 5 ]
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    let dblOdd = [];
    arr.filter(function(ele, ind){
        if(ele % 2 != 0)
        dblOdd[dblOdd.length] = ele * 2;
    })
    return dblOdd;
}
