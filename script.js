const arr2 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const newNumber = ((arr, index) => {
    let exist = 0;
    console.log('index:', index);
    for(let i = 0; i < index; i++){
        if(arr[i] === arr[index]){
            exist = 1;
            return false;
        }
    }
    return true;
})

const checkNumber = ((arr, answerArr, i) => {
    let newArr = [];
    newArr.push(arr[i]);

    for(let ii = i + 1; ii < arr.length; ii++){
        if(arr[i] === arr[ii]){
            newArr.push(arr[i]);
        }
    }
    if(newArr.length > 1){
        answerArr.push(newArr);
    }else{
        answerArr.push(arr[i]);
    }
    return answerArr;
})

const answer = (arr => {
    arr.sort((a,b) => {
        return a - b;
    });

    let answerArr = [];
    
    for(let i = 0; i < arr.length; i++){
        if(i === 0){
            answerArr = checkNumber(arr, answerArr, i);
        }else if(newNumber(arr, i)){
            answerArr = checkNumber(arr, answerArr, i);
        }
    }
    console.log(answerArr);
})

