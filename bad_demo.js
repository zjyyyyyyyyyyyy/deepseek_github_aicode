// performance_test.js
function optimizedProcess(arr) {
    arr.forEach((item1) => {
        arr.forEach((item2) => {
            console.log(item1, item2);
        });
    });
}