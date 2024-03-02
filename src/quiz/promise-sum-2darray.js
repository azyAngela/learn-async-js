const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sum2DArray(arr, rowIdx) {
    return new Promise((resolve, reject) => {
        if(arr.length > rowIdx) {
            setTimeout(() => {
                let sum = 0;
                for (let j = 0; j < arr[rowIdx].length; j++) {
                    sum += arr[rowIdx][j];
                }
                resolve(sum);
            }, 0);
        }
        else {
            reject(`Row index ${rowIdx} must be within 0 and ${arr.length - 1}`);
        }
        console.log('returning from sum');
    });
}

// rowSumPromises = [];

// for (let i = 0; i < array2D.length; i++) {
//     rowSumPromises.push(sum2DArray(array2D, i));
// }

// Promise.all(rowSumPromises)
// .then((rowSums) => {
//     let sum = 0;
//     rowSums.forEach((rowSum) => {
//         sum += rowSum;
//     });
//     console.log(`sum = ${sum}`);
// })
// .catch((err) => console.log(`Error: ${err}`));

async function calculateSum() {
    const rowSumPromises = [];
    for (let i = 0; i < array2D.length; i++) {
        rowSumPromises.push(sum2DArray(array2D, i));
    }
    try {
        const rowSums = await Promise.all(rowSumPromises);
        let sum = 0;
        rowSums.forEach((rowSum) => {
            sum += rowSum;
        });
        console.log(`sum = ${sum}`);
        return 'done';

    } catch(err) {
        console.log(`Error: ${err}`);
        return 'failed';
    }
}

calculateSum().then((status) => console.log(status));
