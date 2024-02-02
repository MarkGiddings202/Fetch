/*
    1. Install node-fetch if your Node version is less than 18
       using NPM, and import it in to your file (ES Module style)
       
    2. Make a request to: https://www.craigslist.org/about/
       and print out the resulting HTML (text) String, using Fetch
    3. Compare what you see in Node to visiting the actual page in
       your Browser - what matches up?
*/

import fetch from "node-fetch";

const fetchCragsLists = async () => {
  const result = await fetch("https://www.craigslist.org/about/");
  const html = await result.text();
  console.log(html);
};

fetchCragsLists()