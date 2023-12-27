import fetch from 'node-fetch';

console.log(fetch)

let response = fetch("https://wallhaven.cc/")

console.log(response)

response.then((res)=>{
    // console.log(res.size)
    // console.log(res.type)
    // console.log(res.url)
    // console.log(res.status)
    // console.log(res.body)
    // console.log(res.text())
    const text = res.text()

    text.then((html)=>{
        console.log(html)
    })
})