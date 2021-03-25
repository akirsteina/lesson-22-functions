// 6. Write a function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function longestWord(phrase) {
    let splitPhrase = phrase.split(' ');
    let longestWord = '';
    for (let i = 0; i < splitPhrase.length; i++) {
        if (splitPhrase[i].length > longestWord.length) {
            longestWord = splitPhrase[i];
        }
    }
    return longestWord;
}

console.log(longestWord('Web Development Tutorial'));


// kāpēc nestrādā kā atsevišķa funkcija?
function longestWord3(phrase) {
    let longWord = phrase.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longWord[0];
}


// should work somewhat like this, according to Jānis

// function longestWord4(phrase) {
//     let longWord = phrase.split(' ').sort(longestWord2);
//     return longWord[0];
// }
// function longestWord2() {
//     return b.length - a.length;
// }



console.log(longestWord3('Web Development Tutorial'));