function calculateSum(arr) {
    let sum = 0;
    for (var i = 0; i <= arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function fetchData(apiEndpoint) {
    fetch(apiEndpoint)
    .then(response => {
        console.log(response.json());
    })
    .catch(error => {
        console.log("Error fetching data");
    })
}
