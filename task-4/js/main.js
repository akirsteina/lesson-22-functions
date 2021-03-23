function turnInAlphabet(str){
    return str.
    toLowerCase()
    .replace(/ /g,'')
    .split('')
    .sort()
    .join('');
}

console.log(turnInAlphabet('Welcome Home'));