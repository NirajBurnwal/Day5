// 1) Do the below programs in anonymous function & IIFE

//a. Print odd numbers in an array
//For Function:
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const getOddNumber = function(array){
//     for(let i=0; i<array.length; i++){
//         if(array[i]%2){
//             console.log(`Odd number : ${array[i]}`);
//         }
//     }
// }
// console.log(getOddNumber(array));



//IIFE function:
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// (function(array){
//     for(let i = 0; i<array.length; i++){
//         if(array[i]%2){
//             console.log(`Odd number : ${array[i]}`);
//         }
//     }
// })(array);



// b. Convert all the strings to title caps in a string array
//For Function:
// let upperCase = function(sentence){
//     let words = sentence.split(" ").map(words =>{
//         return words[0].toUpperCase() + words.slice(1);
//     })
//     return words.join(" ");
// }
// console.log(upperCase("mern stack developer"));

//IIFE function:
// (function(sentence){
//     let words = sentence.split(" ").map(words =>{
//         return words[0].toUpperCase() + words.slice(1);
//     })
//     console.log(words.join(" "));
// })("full stack developer");



// c. Sum of all numbers in an array 
//Answer:
//For Function:
// var arr = [1, 2, 3, 4];
// var total = 0;
// for (var i in arr) {
//   total += arr[i];
// }

// console.log(`Sum of elements :${total}`);

//IIFE function:
// const arr = [1, 2, 3, 4, ];
// let total = 0;
// (function (arr) {
//     for (var i in arr) {
//   total += arr[i];
// }
//     console.log(`Sum of elements :${total}`);
// })(arr);



// d. Return all the prime numbers in an array
//Answer:
//For Function:
// const array = [-5, -3, -2, -1, ...Array(20).keys()]; 

// const isPrime = function(num) {
//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) {
//         return false;
//       }
//     }
//     return num > 1;
//   }
  
//   console.log(array.filter(isPrime));



//IIFE function:
// var num = (function (array) {
//     return array.filter((n) => {
//         for (let i = 2; i < n; i++) {
//             if (n % i === 0) return false;
//         }
//         return n > 1;
//     })
// })([-5, -3, -2, -1, ...Array(20).keys()]);
// console.log(num);



// e. Return all the palindromes in an array
//Answer:
//For Function:
// let palindromes = function(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }
// console.log(palindromes("lol"));



//IIFE function:
// var palindromes = (function (str) {
//     let string = str.split("");
//     let len = string.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]){
//             return "String is not a palindromes";
//         }
//     }
//     return "String is palindrome"
// })("dry");
// console.log(palindromes);



// f. Return median of two sorted arrays of the same size
//Answer:
//For Function:
// let arr1 = [21, 65, 67, 90, 12];
// let arr2 = [30, 67, 8, 52, 4];

// let getMedian = function(a, b){
//     let newArr = [...arr1,arr2]
//     let sortedArray = newArr.sort((a, b)=> a-b)
//     let midIndex = sortedArray.length/2-1 
//     let median = ((sortedArray[midIndex]+ sortedArray[midIndex + 1])/2)
//     console.log(`Median : ${median}`);
// }
// getMedian(arr1, arr2);



//IIFE function:
// let arr1 = [21, 65, 67, 90, 12];
// let arr2 = [30, 67, 8, 52, 4];

// (function(a, b){
//     let newArr = [...arr1,arr2]
//     let sortedArray = newArr.sort((a, b)=> a-b)
//     let midIndex = sortedArray.length/2-1 
//     let median = ((sortedArray[midIndex]+ sortedArray[midIndex + 1])/2)
//     console.log(`Median : ${median}`);
// })(arr1, arr2);



// g. Remove duplicates from an array
//Answer:
//For Function:
// let array = [1, 2, 5, 2, 1, 8];
// unique = [];

// let getUnique = function(a, b){
//     let len = a.length;
//     for(let i =0; i<len; i++){
//         if(b.indexOf(a[i])===-1){
//             b.push(a[i]);
//         }
//     }
//     console.log(b);
// }
// getUnique(array, unique);
// //Output:[ 1, 2, 5, 8 ]



//IIFE function:
// let array = [1, 2, 5, 2, 1, 8];
// let uniqueArray = [];
// (function(a, b){
//     let len = a.length;
//     for(let i =0; i<len; i++){
//         if(b.indexOf(a[i])===-1){
//             b.push(a[i])
//         }
//     }
//     console.log(b);
// })(array, uniqueArray);
//Output:[ 1, 2, 5, 8 ]


// h. Rotate an array by k times
//Answer:
//For Function:
// let getArray = function (array, k) {
//     let len = array.length;
//     for (let i = 0; i < k; i++) {
//         let temp = array[0];
//         for (let j = 0; j < len; j++) {
//             array[j] = array[j + 1];
//         }
//         array[len - 1] = temp;
//     }
//     console.log(array);
// }
// let array = [2, 3, 4, 5, 6, 7];
// let k = 3;
// getArray(array, k);
//Output: [ 5, 6, 7, 2, 3, 4 ]


//IIFE Function:
// let array = [2, 3, 4, 5, 6, 7];
// let k = 2;

// (function (arr, k) {
//     let len = arr.length;
//     for (let i = 0; i < k; i++) {
//         let temp = arr[0];
//         for (j = 0; j < len; j++) {
//             arr[j] = arr[j + 1];
//         }
//         arr[len-1] = temp;
//     }
//     console.log(arr)
// })(array, k)
//Output: [ 4, 5, 6, 7, 2, 3 ]



//3) Do the below programs in arrow functions

// a. Print odd numbers in an array:
// let odd = []
// const oddNumber = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 !== 0) {
//             odd.push(array[i]);
//         }
//     }
//     console.log(odd);
// }
// oddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
// //Output: [1,  3,  5,  7, 9, 11, 13, 15];



//b. Convert all the strings to title caps in a string array
// const titalCap = (string) => {
//     let StringUpper = string.split(" ").map(StringUpper => {
//         return StringUpper[0].toUpperCase() + StringUpper.slice(1);
//     })
//     console.log(StringUpper.join(" "));
// }

// titalCap("this is my car")



//c. Sum of all numbers in an array
// let array = [1, 3, 5, 7, 9, 8, 6, 4, 2];
// let sum = (array) => {
//     let SumofAllnumber = array.reduce(function (acc, curr) {
//         acc = acc + curr;
//         return acc;
//     }, 0)
//     console.log(SumofAllnumber);
// }
// sum(array);
//Output: 45


//d. Return all the prime numbers in an array
// let prime = (arr) => {
//     return arr.filter((n) => {
//         for (let i = 2; i < n; i++) {
//             if (n % i === 0) return false;
//         }
//         return n > 1;
//     })
// }

// console.log(prime([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
// //Output: [ 2, 3, 5, 7, 11, 13 ]



//e. Return all the palindromes in an array
// let Ispalindrome = (word) => {
//     let word1 = word.split("");
//     for (let i = 0; i < word1.length / 2; i++) {
//         if (word1[i] === word1[word1.length - 1 + i]) {
//             return "It is palindromes"
//         }
//     }
//     return "It is not palindromes";
// }
// console.log(Ispalindrome("abcba"));
