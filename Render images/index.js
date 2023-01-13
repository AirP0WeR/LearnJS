// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.
const containerEl = document.getElementById('container-el');
let cards = "";

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

function renderImages(imgs) {
    for (let i = 0; i < imgs.length; i++) {

        cards += `<img class="team-img" src="${imgs[i]}">`;
        // console.log(cards);
    }
    console.log(cards);
    containerEl.innerHTML = `${cards}`;

}

renderImages(imgs);