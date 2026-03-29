// Exercise 1: Callbacks
function processData(data, callback) {
    console.log("Processing:", data);
    callback();
}
processData("User Data", () => console.log("Callback Executed!"));

// Exercise 2: Promise Chaining
fetch('https://jsonplaceholder.typicode.com')
    .then(response => response.json())
    .then(json => console.log("Promise Chain Result:", json.title))
    .catch(err => console.error("Error:", err));

// Exercise 3: Async/Await
async function getQuickData() {
    const response = await fetch('https://jsonplaceholder.typicode.com');
    const data = await response.json();
    console.log("Async/Await Result:", data.title);
}
getQuickData();
