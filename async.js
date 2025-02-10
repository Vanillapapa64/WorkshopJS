//below is an async function which tells us that something inside this function will take some time to complete
async function fetchUserData() {
    try {
        console.log("Fetching");
        //below line of code shows that fetching data from another website will take some time
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) {
            throw new Error("Som error came up");
        }
        //we have to wait for data from response
        let data = await response.json();
        console.log("User Data:", data);
    } catch (error) {
        //if any xyz error occurred above, error will be shown
        console.error("Error fetching user data:", error.message);
    }
}

fetchUserData();