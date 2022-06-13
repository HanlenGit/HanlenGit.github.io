const card = document.getElementById("card")

card.addEventListener("click", flipcard);

function flipCard() {
    card.classList.toggle("flipCard");
}

