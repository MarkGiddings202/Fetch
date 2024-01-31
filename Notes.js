// Fetch Example
// import fetch from "node-fetch"

const response_linkedIn = fetch(
  "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
);
const response_wallHaven = fetch("https://wallhaven.cc/");

// These are objects
console.log(response_linkedIn);
console.log(response_wallHaven);
/*
- We got back a pending promise

What can we do with a pending promise?
- We can use a .then() on them
*/

response_wallHaven.then((result) => {
  // getting all the keys in this response_wallHaven object
  for (let key in result) {
    console.log(key);
    /* 
    we get all the keys
    type
    url
    redirected
    status
    ok
    statusText
    headers
    body <----- Important
    bodyUsed
    clone
    blob
    arrayBuffer
    text
    json
    formData
    */
  }

  // Checking for response_wallHaven objects prototype
  // console.log(result.__proto__);
  /*
    Object [Response] {
  type: [Getter],
  url: [Getter],
  redirected: [Getter],
  status: [Getter],
  ok: [Getter],
  statusText: [Getter],
  headers: [Getter],
  body: [Getter],
  bodyUsed: [Getter],
  clone: [Function: clone],
  blob: [Function: blob],
  arrayBuffer: [Function: arrayBuffer],
  text: [Function: text],
  json: [Function: json],
  formData: [AsyncFunction: formData]
}
    */

  // console.log(result.url);
  // console.log(result.headers);
  // console.log(result.body);
  // console.log(result.ok);
  // console.log(result.status);
  /*
   */
  // Getting the text from the webpage
  console.log(result.text()); // result.text() returns us a promise
  // Since this is a promise we can use a .then() on it to receive that promise
  // first we store it to a variable
  let text = result.text();
  // we then refer to that text & start a .then() chain on it
  text.then((html) => {
    console.log(html);
  }).catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });;
});
