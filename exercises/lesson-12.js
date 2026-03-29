// Exercise: Fetching, Error Handling, and Loading States
async function fetchUsers() {
    console.log("LOADING: Fetching users list..."); // Simulated loading state
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com');
        
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const users = await response.json();
        console.log("SUCCESS: Found", users.length, "users.");
        console.table(users.map(u => ({ Name: u.name, Email: u.email })));

    } catch (error) {
        console.error("FAILURE:", error.message);
    } finally {
        console.log("PROCESS FINISHED."); // End of loading state
    }
}

fetchUsers();
