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
// console.log(
//     binarySearch([1, 2, 3, 4, 5, 7, 8, 9, 10, 44, 50, 77, 99, 100], 100)
// );

const arr = [5, 2, 1, 4, 3, 6];

function sum(arr) {
    return arr.length === 1 ? arr[0] : arr[0] + sum(arr.slice(1));
}

function findSmallest(arr) {
    let smallest = arr[0];
    arr.forEach(item => {
        if (smallest > item) {
            smallest = item;
        }
    });
    return smallest;
}

// console.log(findSmallest(arr));

function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        const pivot = arr[Math.floor(Math.random() * arr.length)];
        const greater = [];
        const equal = [];
        const less = [];
        arr.forEach(item => {
            if (item > pivot) {
                greater.push(item);
            }
            if (item === pivot) {
                equal.push(item);
            }
            if (item < pivot) {
                less.push(item);
            }
        });
        return [...quickSort(less), ...equal, ...quickSort(greater)];
    }
}

console.log(quickSort([5, 3, 10, 200, 3, 2, 300, 401, 10, 500, 2]));
