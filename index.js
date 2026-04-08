function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
try{
    let x = fetch("https://api.imgflip.com/get_memes")
    .then((response) => response.json())
    .then((data) => {
        // console.log(data.count,"hh")
        let count1 = 0;
        function createCard(){
            let card = document.createElement("div")
            card.setAttribute("class", "card")
            let img = document.createElement("img")
            img.setAttribute("class", "card-img")
            let title = document.createElement("h3")
            title.setAttribute("class", "card-title")
            title.innerText = data.data.memes[count1].name
            img.src = data.data.memes[count1].url
            card.appendChild(img)
            card.appendChild(title)
            document.getElementById("cards").appendChild(card)
            count1++;
        }
        for(let i=0; i<10; i++){
            createCard()
        }
        function creatememe(){
            for(let i=0; i<10; i++){
                createCard()
            }
        }
        document.getElementById("meme-loade").addEventListener("click", creatememe);
    }).catch((error) => {
        console.log(error)
    })
}
catch(error){
    console.log(error)
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.querySelector('.nav-links').classList.remove('active');
        });
    });
});

// try {
//     x = fetch("" , b01c32bafa8d4d039033ecaf09958b49)
// }
// const url = 'https://api.apileague.com/retrieve-random-joke?include-tags=animal';
// const apiKey = 'b01c32bafa8d4d039033ecaf09958b49';

// fetch(url, {
//     method: 'GET',
//     headers: {
//         'x-api-key': apiKey
//     }
// })
// .then(response => {
//     if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
// })
// .then(data => console.log(data))
// .catch(error => console.error('There was a problem with the fetch operation:', error));
// const apiKey = 'b01c32bafa8d4d039033ecaf09958b49';
const apiKey = '4e3de7f4c42a48239ffbc35e91039e7c';
// const url = `https://api.apileague.com/search-memes?keywords=rocket&number=3&api-key=${apiKey}`;
const url = `https://api.apileague.com/search-memes?keywords=rocket&number=3&api-key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const memesContainer = document.getElementById('memes-container');});