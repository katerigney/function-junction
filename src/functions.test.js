/**
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */
let x = 1;
let y = 2;

const max = (x, y) => {
  if (x > y) {
    return x;
  }
  else {
    return y;
  }
}
// ...

/**
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

const maxOfThree = (x, y, z) => {
  let a = max(x, y)
  return max(a, z)
}

// ...

/*
 * Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

let dogs = 1;
let cats = 2;

const sum = (dogs, cats) => {
  return dogs + cats;
}
// ...

/*
 * Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 */


const sumOfArray = (array) => {
  let sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum;
}

// ...

/**
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

const isVowel = (x) => {
  if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u" || x === "A" || x === "E" || x === "I" || x === "O" || x === "U") {
    return true;
  }
  else {
    return false;
  }
}
// ...

/**
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".
 */


 //

 const rovarspraket = (phrase) => {

  if(typeof phrase == 'number'){
    let convertedPhrase = phrase.toString()
    return convertedPhrase;
  }
  else{
  // list of consonants
  const consonants = "bcdfghjklmnpqrstvwxz";
  //taking the passed string and splitting it
 
  let newString = phrase.split('');

  // ('t', 'h','i, ...')
  // loop through the string to identify consonants
  let b = [];

  for (var i = 0; i < phrase.length; i++) {
    //if true take each element and apply new string
    if (consonants.includes(newString[i])) {
      let newText = newString[i] + "o" + newString[i];
      // console.log(newString[i])
      b.push(newText);
    }
    else {
      // console.log(newString[i]);
      b.push(newString[i]);
      
    }
  }

  let answer =  b.join("");
  return answer;
  }
}
// ...

/**
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

const reverse = (word) => {
  return word.split('').reverse().join("");
}
// ...

/**
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */


const findLongestWord = (longestPhrase) => {
  let wordArray = longestPhrase.split(" ");
  let longestWord = 0;
  let findingLongestWord = "";

  for (let index = 0; index < wordArray.length; index++) {
    if (wordArray[index].length > longestWord) {
      longestWord = wordArray[index].length;
      findingLongestWord = wordArray[index];
    }
  }
  return findingLongestWord;
}
// ...

/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'

test('max()', (t) => {
  t.is(max(1, 3), 3)
  t.is(max(0, 3), 3)
  t.is(max(10, 3), 10)
  t.is(max(-1, -3), -1)
  t.is(max('aaa', 0), 0)
  t.true(isNaN(max('aaa', 'bbb')))
})

test('maxOfThree()', (t) => {
  t.is(maxOfThree(1, 3, 2), 3)
  t.is(maxOfThree(0, 3, -1), 3)
  t.is(maxOfThree(10, 3, 50), 50)
  t.is(maxOfThree(-1, -3, -10), -1)
  t.is(maxOfThree('aaa', 0, 1), 1)
  t.true(isNaN(maxOfThree('aaa', 'bbb', 'ccc')))
})

test('sum()', (t) => {
  t.is(sum(8, 11), 19)
  t.is(sum(4, 100), 104)
})

test('sumOfArray()', (t) => {
  t.is(sumOfArray([1, 2]), 3)
  t.is(sumOfArray([1, 2, 3]), 6)
  t.is(sumOfArray([10, 9, 8]), 27)
  t.is(sumOfArray([]), 0)
})

test('isVowel()', (t) => {
  t.is(isVowel(0), false)
  t.is(isVowel('B'), false)
  t.is(isVowel('b'), false)
  t.is(isVowel('a'), true)
  t.is(isVowel('E'), true)
})

test('rovarspraket()', (t) => {
  t.is(rovarspraket('a'), 'a')
  t.is(rovarspraket('b'), 'bob')
  t.is(rovarspraket('cat'), 'cocatot')
  t.is(rovarspraket('javascript'), 'jojavovasoscocroripoptot')
  t.is(rovarspraket(0), '0')
})

test('reverse()', (t) => {
  t.is(reverse('books'), 'skoob')
  t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew")
})

test('findLongestWord()', (t) => {
  t.is(findLongestWord('book dogs'), 'book')
  t.is(findLongestWord('life the universe and everything'), 'everything')
  // t.is(findLongestWord('everything'), 'life the universe and everything')
})

/* eslint-enable */
