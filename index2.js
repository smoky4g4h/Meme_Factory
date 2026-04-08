// import { someFunction } from './module.js';
// import { createElement } from 'https://esm.sh/react@18';

// const { createElement } = require("react");

// const apiKey = 'b01c32bafa8d4d039033ecaf09958b49';
// const apiKey = '4e3de7f4c42a48239ffbc35e91039e7c';
// const apiKey = 'bea325e448f54083941be3247347ac52';
// const url = `https://api.apileague.com/search-memes?keywords=rocket&number=3&api-key=${apiKey}`;
let x1 = 49;
const url = `https://meme-api.com/gimme/${x1}`;
// const url = `https://reddit-meme-api.herokuapp.com/${x1}`;
let arr = [];
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    arr = data.memes.map(x => x.title.toLowerCase());
    let count2 = 0;
    function createCard() {
        if (!data || !data.memes) {
            console.error("Data structure is not as expected:", data);
            return;
        }

        let card = document.createElement("div");
        card.setAttribute("class", "card");
        let img = document.createElement("img");
        img.setAttribute("class", "card-img");
        let title = document.createElement("h3");
        title.setAttribute("class", "card-title");
        
        // Accessing the memes array directly
        title.innerText = data.memes[count2].title;
        img.src = data.memes[count2].url;
        card.appendChild(img);
        card.appendChild(title);
        document.getElementById("cards").appendChild(card);
        count2++;
    }
    createCard();
    createCard();
    createCard();
    createCard();
    createCard();
    createCard();
    createCard();
    createCard();
    createCard();
    createCard();
    createCard();
    createCard();
    createCard();
    createCard();
    createCard();
    createCard();
    console.log(arr)
});
