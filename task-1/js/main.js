function reversenumber(number) {
    return parseInt(number.toString().split('').reverse().join(''));
}
console.log(reversenumber(32243));