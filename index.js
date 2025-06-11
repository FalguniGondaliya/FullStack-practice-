
// //innertext example
// let para = document.querySelector(".paragraph").innerText;
// console.log("paragraph---->",para);

// //innerhtml example
// let para2 = document.querySelector(".paragraph").innerHTML;
// console.log("paragraph---->",para2);

// //text content example
// let para3 = document.querySelector(".paragraph").textContent;
// console.log("paragraph---->",para3);


// const parag = document.querySelector("p");
// console.log(parag.getAttribute("class"));

// const changbtn = document.querySelector(".change");
// changbtn.addEventListener("click",()=>{
//     parag.setAttribute("class","change-para");

// });

//Append child and create element example

const inputBox = document.querySelector(".input");
const addbButton = document.querySelector(".add-todo");
addbButton.addEventListener("click", () => {
    if (inputBox.value === "") {
        alert("please enter a values");
        return;
    }
    else {
        let val = inputBox.value;
        // console.log(inputBox.value)
        const li = document.createElement("li");
        //console.log(li)
        li.innerText = val;
        const list = document.querySelector(".ordered-list");
        list.appendChild(li);
        console.log(list)
        inputBox.value = "";
        li.setAttribute("class", "list-color");
        console.log("element added in todo list")

    }


})
const removeButton = document.querySelector(".remove-todo");
removeButton.addEventListener("click", () => {
    const list = document.querySelector(".ordered-list");
    if (list === null) {
        alert("no items to remove");
        return;
    }
    else {
        list.removeChild(list.lastElementChild);
        console.log("last element removed");
    }
})
