function themeBlue() {
    let arr = document.querySelectorAll(".bg-warning.card-body");
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.remove("bg-warning");
        arr[i].classList.add("bg-primary");
    }
}

function themeYellow() {
    let arr = document.querySelectorAll(".bg-primary.card-body");
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.remove("bg-primary");
        arr[i].classList.add("bg-warning");
    }
}

let cardsData = [
    {
        id: 1,
        cardTitle: "card title1",
        cardContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ipsa!"
    },
    {
        id: 2,
        cardTitle: "card title2",
        cardContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ipsa!"
    },
    {
        id: 3,
        cardTitle: "card title3",
        cardContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ipsa!"
    },
    {
        id: 4,
        cardTitle: "card title4",
        cardContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ipsa!"
    },
];

function cardDelete(cardId) {
    document.getElementById(cardId).remove();
}

cardsData.forEach(card => {
    let row = document.querySelector(".row");
    
    const col = document.createElement("div");
    col.classList.add('col-md-4');
    col.setAttribute('id', card.id)
    
    const div = document.createElement("div");
    div.classList.add("bg-primary", "card-body", "rounded", "text-white", "p-3");
    
    const div2 = document.createElement("div");
    div2.classList.add('card-content', 'd-flex', 'flex-row', 'align-items-center', 'gap-2');
    
    const div3 = document.createElement("div");
    div3.classList.add('card-text-wrapper');
    
    const h1 = document.createElement("h1");
    h1.classList.add('card-title', 'fs-5', 'fw-normal');
    
    const p = document.createElement("p");
    p.classList.add('card-desc');
    
    const button = document.createElement("button");
    button.classList.add('btn', 'btn-danger');
    button.innerText = "delete";
    button.addEventListener("click", () => {
        cardDelete(card.id);
    }
    );

    h1.innerText = card.cardTitle;
    p.innerText = card.cardContent;

    row.append(col);
    col.append(div);
    div.append(div2);
    div2.append(div3);
    div3.append(h1);
    div3.append(p);
    div2.append(button);

});