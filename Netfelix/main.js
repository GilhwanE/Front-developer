function add(a,b) {
    return a+b;
}

console.log(add(5,3));

function surprise(operator) {
    const result = operator(2,3);  //add호출
    console.log(result);
    
}

surprise(add); 


// flase 0 -0 '' null 데이터가 없고 비어있는것은 여기에 속함 