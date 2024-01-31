import fetch from "node-fetch";

let response = fetch("https://www.themealdb.com/api.php")

console.log(response) // checking for promise or connection

// getting the promise resolve
response.then((result)=>{
    // returning the text as a promise
    return result.text()
})//
.then((html)=>{
    // getting the resolved value from promise
    console.log(html)
})