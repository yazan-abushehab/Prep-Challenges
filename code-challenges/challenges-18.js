'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
    let splits = str.split(/(\s+)/);
    let words = splits.filter((x) => x.trim().length > 0);
    let count = words.length - 1;
    //console.log (count)
    //console.log (words)
    let x = Math.ceil(count / 2);
    console.log(words[x].length);
    return words[x].length;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
    let arr = str1.split("")
    arr.sort()
    let arr2 = str2.split("")
    arr2.sort()
    let str = arr.join("")
    let str3 = arr2.join("")
    if (str === str3) {
        return true
    }
    else {
        return false
    }
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === int) {
            console.log(i)
            return i;
        }
        else if (arr[i] === int - 1) {
            console.log(i + 1)
            return i + 1
        }
    }
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };