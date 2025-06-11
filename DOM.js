const startHeading = document.querySelector("h1");
console.log(startHeading.innerText);
startHeading.style.backgroundColor = "lightblue"; 

const nameInput = document.querySelector(".name");
console.log("nameInput------>",nameInput);

const ageInput = document.querySelector(".age");
console.log("ageInput----->",ageInput);

submitBtn = document.querySelector(".submit").addEventListener("click",(e)=>{
   e.preventDefault();
   console.log(nameInput.value);
   console.log(ageInput.value);

});

/*const para = document.getElementsByClassName("paragraph");
console.log(Array.isArray(para));
if (para) {
    Array.from(para).map((item)=>{
        console.log(item);
        return item;
    });
    
}*/