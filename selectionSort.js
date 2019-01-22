function findSmallest(arr){
    let smallestElement = arr[0];
    let smallestIndex = 0;

    for (let i = 1; i < arr.length; i++){
        if (arr[i] < smallestElement){
            smallestElement =  arr[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}