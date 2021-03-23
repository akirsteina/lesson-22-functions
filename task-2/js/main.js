// // 2. Write a function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function isPhrasePalindrome(phrase) {
    const phrase2 = phrase
        .toLowerCase()
        .replace(/ /g, '');

    if (phrase2 === phrase2.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

console.log(isPhrasePalindrome('nurses run'));
console.log(isPhrasePalindrome('madam'));
console.log(isPhrasePalindrome('dog'));