function identityMatrix(num){
    
for (let i=0; i<=num; i++){
    let array =[];
    let row = [];
    for (let j=0; j<=num; j++){
        
        if (i===j){
            row.push(' 1 ') ;
        } else {
            row.push(' 0 ') ;
        }
    }
    array.push(row);
}
console.log(array);
}

console.log(identityMatrix(3));