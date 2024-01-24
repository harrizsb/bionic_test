function selisih(arr) {
    let minVal = arr[0];
    let maxDev = 0;

    for (let i = 1; i < arr.length; i++) {
        maxDev = Math.max(maxDev, arr[i] - minVal);
        minVal = Math.min(minVal, arr[i]);
    }

    return maxDev;
}


const res = selisih([10, 7, 5, 8, 11, 9, 1])

console.log(res)