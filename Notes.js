// Fetch Example
import fetch from "node-fetch"

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

console.log(result.__proto__.__proto__);
});