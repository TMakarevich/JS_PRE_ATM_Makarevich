// Implement a function addWithDelay() which will work with parameters according to the conditions below:
// - If all parameters are positive numbers, it should return within 1000ms timeframe a Promise containing a sum of all the numbers provided as parameters 
// - If any parameter is represented by a negative number, function should return an error message “Error! 
// Some parameter is a negative number!" using “reject()” option

function addWithDelay(a, b) {
    let myPromise = new Promise((resolve, reject) => {
        if ((a < 0) || (b < 0)) {
            reject('Error! Some parameter is a negative number!');
        } else {
            setTimeout(() => {
                resolve(a + b);
            }, 1000);
        }
    })
    myPromise
        .then(result => console.log(result))
        .catch(result => console.log(result));
}

addWithDelay(3, 3);
addWithDelay(-3, 3);