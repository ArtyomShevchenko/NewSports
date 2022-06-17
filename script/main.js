const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu").children[0];
const nav = document.querySelector(".navigation-container");

document.body.addEventListener("click", (event) => {

    // click on burger and toggle class
    if (event.target === burger) {
        burger.classList.toggle(`_active`);
        menu.classList.toggle(`_active`);
        nav.classList.toggle("navigation-container_active");
        document.body.classList.toggle("open-menu-burger");
    } else {
        burger.classList.remove(`_active`);
        menu.classList.remove(`_active`);
        nav.classList.remove("navigation-container_active");
        document.body.classList.remove("open-menu-burger");
    };
    // 
});

document.querySelectorAll("button").forEach( button => {
    button.addEventListener("click", () => {
        button.parentElement.classList.toggle("_active-post");
        nav.classList.toggle("_shrink");
    })
})