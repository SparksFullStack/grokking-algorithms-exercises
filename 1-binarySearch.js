function binarySearch(arr, val){
    let low = 0;
    let high = arr.length - 1;

    while (low <= high){
        let mid = Math.floor((low + high) / 2);
        let currentElement = arr[mid];

        if (currentElement === val) return true;
        if (currentElement > val) high = mid - 1;
        else if (currentElement < val) low = mid + 1;
    }

    return false;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 8));