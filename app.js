let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

// Declare delbtn outside the "Add task" button click event handler
let delbtn;

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;
    
    // Move the declaration of delbtn here
    delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ul.appendChild(item);

    inp.value = "";
});

// Add click event listener to the ul element for event delegation
ul.addEventListener("click", function (event) {
    // Check if the clicked element has the class "delete"
    if (event.target.classList.contains("delete")) {
        console.log('element deleted');
        // Remove the parent li element when the delete button is clicked
        let par = event.target.parentElement;
        par.remove();
    }
});
