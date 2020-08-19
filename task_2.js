// Create a function(s) that returns total amount of seconds starting from the beginning of today and till now.

function task_2() {

    let now_date = new Date();

    // console.log(now_date);
    // console.log(now_date/1000);

    // console.log(now_date.getFullYear());
    // console.log(now_date.getMonth());
    // console.log(now_date.getDate());

    let start_of_today = new Date(now_date.getFullYear(), now_date.getMonth(), now_date.getDate());
    // console.log(start_of_today);
    // console.log(start_of_today.getTime()/1000);



    let total_amount_of_seconds = now_date.getTime() / 1000 - start_of_today.getTime() / 1000;
    return console.log(total_amount_of_seconds);
}
task_2();