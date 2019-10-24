function selectionSort(array) {
    for (let wall = 0; wall < array.length; wall++) {
        let indexOfSmallest = wall;
        for (let j = wall + 1; j < array.length; j++) {
            if (array[indexOfSmallest] > array[j]) {
                indexOfSmallest = j;
            }
        }
        // swap elements
        let temp = array[wall];
        array[wall] = array[indexOfSmallest];
        array[indexOfSmallest] = temp;
    }

    return array;
}

function binarySearch(array, target, start = 0, stop = array.length) {
    let midIndex = Math.floor((stop - start) / 2 + start);
    if (array[midIndex] === target) {
        return midIndex;
    }

    if (array[midIndex] < target) {
        return binarySearch(array, target, midIndex + 1, stop);
    } else {
        return binarySearch(array, target, start, midIndex - 1);
    }
}
console.log(
    binarySearch([1, 2, 3, 4, 5, 7, 8, 9, 10, 44, 50, 77, 99, 100], 100)
);
