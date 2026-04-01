// Hamburger menu toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Close menu when a link is clicked
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.querySelector('.nav-links').classList.remove('active');
        });
    });
});

try{
    let x = fetch("https://api.imgflip.com/get_memes")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        count = 0;
        function createCard(){
            let card = document.createElement("div")
            card.setAttribute("class", "card")
            let img = document.createElement("img")
            img.setAttribute("class", "card-img")
            let title = document.createElement("h3")
            title.setAttribute("class", "card-title")
            title.innerText = data.data.memes[count].name
            img.src = data.data.memes[count].url
            card.appendChild(img)
            card.appendChild(title)
            document.getElementById("cards").appendChild(card)
            count++;
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
