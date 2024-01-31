// Fetch Example
import fetch from "node-fetch";

const response = fetch("https://wallhaven.cc/");

// These are objects
// console.log(response_linkedIn);
console.log(response);
/*
- We got back a pending promise

What can we do with a pending promise?
- We can use a .then() on them
*/

response
  .then((result) => {
    // getting all the keys in this response object
    //   for (let key in result) {
    //     console.log(key);
    //     /*
    //     we get all the keys
    //     type
    //     url
    //     redirected
    //     status
    //     ok
    //     statusText
    //     headers
    //     body <----- Important
    //     bodyUsed
    //     clone
    //     blob
    //     arrayBuffer
    //     text
    //     json
    //     formData
    //     */
    //   }

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
    // console.log(result.text()); // result.text() returns us a promise
    // Since this is a promise we can use a .then() on it to receive that promise
    return result.text();
  })
  .then((html) => {
    // we grab the sucessful promise to that text & start a .then() chain on it
    console.log(html);
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error("Why the Fetch error:", error);
  });

  /*
   Some take aways here is that to fetch you must grab the url
    and should most likely store that response in a variable.
    its import to keep note that, that response is an object so object rules apply
    on that respose you can check for the properties and see if one is also a function.
    in this case .text() which returned us html text.
    in this case some responses gives us a promise
    we should then return that response.text() value
    and use a .then() on it to see the resolve value.
    Once you console log the value, you're welcome to
    use a .catch() method incase the promise were to ever fail.
    catch is still important because we don't want our programs to crash and fail.
   */
