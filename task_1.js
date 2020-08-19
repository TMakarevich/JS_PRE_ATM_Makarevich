// Create a function(s) that fulfills array with 10 random integer values and returns a multiply of 3 greatest values. 

function task_1() {

    let random_mas = [];
    for (let i = 0; i < 10; i++) {
        random_mas[i] = Math.floor(Math.random() * 100);
    }
    // console.log(random_mas);
    random_mas.sort(function (a, b) {
        return a - b;
    });
    // console.log(random_mas);
    let max_1 = random_mas[7];
    let max_2 = random_mas[8];
    let max_3 = random_mas[9];
    // console.log(max_1, max_2, max_3);
    let multiple_of_max = max_1 * max_2 * max_3;
    return console.log(multiple_of_max);

}
task_1();