function identityMatrix(num) {
    let array = [];
    for (let i = 0; i <= num; i++) {

        let row = [];
        for (let j = 0; j <= num; j++) {

            if (i === j) {
                row.push(' 1 ');
            } else {
                row.push(' 0 ');
            }

        }
        array.push(row);
    }
    displayMatrix(array);
}

function displayMatrix(item) {
    for (i in item) {
        console.log(item[i].join(' '));
    }
}

console.log(identityMatrix(6));