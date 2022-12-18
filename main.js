
let links = document.querySelectorAll(".links li");

links.forEach(li => {
    li.addEventListener("click", () => {
        reset();
        li.classList.add("active");
    })
})

function reset(){
    links.forEach(li => {
        li.classList.remove("active");
    })
}