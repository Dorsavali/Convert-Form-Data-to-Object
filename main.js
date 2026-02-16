let form = document.querySelector("#form");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let ageInput = document.querySelector("#age");
let city = document.querySelector("#city");
let submit = document.querySelector("#submit");
let container = document.querySelector("#container");

submit.addEventListener("click", function(e) {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(form));


    const row = document.createElement("div");
    row.classList.add("row");

    row.innerHTML = `
        <span>${data.name}</span>
        <span>${data.email}</span>
        <span>${data.age}</span>
        <span>${data.city}</span>
    `;

    container.appendChild(row);
    form.reset();
});
