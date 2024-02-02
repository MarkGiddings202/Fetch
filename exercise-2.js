/*
    1. Install node-fetch if your Node version is less than 18
       using NPM, and import it in to your file (ES Module style)

    2. Have a read through pokeapi.co
     (side note when inspecting the pokeapi.co you can throw the url's and find the images)

    2. Make a request to:
       https://pokeapi.co/api/v2/pokemon/pikachu
       and print out pikachu's "official-artwork"'s URL for
       their image (png). Visit this URL to make sure it works
       using your Browser.
    
    
       
    HINT: Be careful with the naming of the keys here when trying
          to access the parsed JSON
*/

const fetchData = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    // how do I get the official-artwork key from this json
    const pokemon = await response.json()
    // make a variable storing the data that you want.
    // be sure to be specific to what you see on the website.
    const imgUrl = pokemon.sprites.back_default
    const offArt = pokemon.sprites.other.home.front_default
    console.log(imgUrl);
    console.log(offArt);

    let img = document.getElementById("pkmn")
    img.setAttribute("src", imgUrl)
    let img2 = document.getElementById("OfficialArt")
    img2.setAttribute("src", offArt)
};

// the function will run at the start of the program so long as we use it
  fetchData();
  
 