// 6. Write a function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function uppercase(phrase) {
    let words = phrase.split(' ');
    
    for (i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    
    }

return words.join(' ');
}

console.log(uppercase('the quick brown fox'))