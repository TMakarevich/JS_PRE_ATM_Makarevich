// Define an object happiness within 5 properties. 
// Each property should have default integer value, representing its priority. 
// Then create a function that returns a list of property names sorted by priority (highest is on top).

let happiness = {
    health: 1,
    job: 3,
    friends: 4,
    hobby: 5,
    family: 2,
};

// console.log(happiness);
// console.log(Object.keys(happiness));
// console.log(Object.values(happiness));

function task_3(Object) {
    let masHappiness = [];
    for (let property in Object) {
        masHappiness.push([property, Object[property]]);
    }
    // console.log(masHappiness);

    masHappiness.sort(function (a, b) {
        return a[1] - b[1];
    });
    return console.log(masHappiness);
};

task_3(happiness);