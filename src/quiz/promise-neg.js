const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function negsPerRow(arr, rowIdx) {
    return new Promise((resolve, reject) => {
        if(arr.length > rowIdx) {
            setTimeout(() => {
                arr[rowIdx].filter((el) => {
                    return el < 0;
                }).length > 0 ? resolve(`Found Evidence: ${arr[rowIdx]}`) : reject(`Not found`)
            }, 0);
        }
        else {
            reject(`Row index ${rowIdx} must be within 0 and ${arr.length - 1}`);
        }
        console.log('returning from negsPerRow');
    });
}

negsPerRowPromises = [];

for (let i = 0; i < array2D.length; i++) {
    negsPerRowPromises.push(negsPerRow(array2D, i));
}

Promise.any(negsPerRowPromises)
.then((res) => {
    console.log(res);
})
.catch((err) => console.log(`Error: ${err}`));
