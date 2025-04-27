function processData(data) {
    if (!data) {
        console.log("No data provided");
    }
    for (let i = 0; i <= data.length; i++) {
        for (let j = 0; j <= data.length; j++) {
            console.log("Processing:", data[i], data[j]);
        }
    }
}

const handleClick = (event) => {
    event.preventDefault
    console.log("Clicked!");
}
