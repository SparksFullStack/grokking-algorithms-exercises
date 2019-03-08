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

function selectionSort(arr){
    const sortedArr = [];
    const length = arr.length;

    for (let i = 0; i < length; i++){
        let smallestIndex = findSmallest(arr);
        let smallestElement = arr.splice(smallestIndex, 1);
        sortedArr.push(smallestElement[0]);
    }

    return sortedArr;
}

console.log(selectionSort([4, 1, 6, 7, 8, 2, 5]));
