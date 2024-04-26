let textarea = document.getElementById("text");
let count = document.getElementById("count");
let maxLenght = textarea.getAttribute("maxlength")

// textarea.oninput = function () {
//     console.log(textarea.textContent.length);
// }

textarea.oninput = function () {
   // count.innerHTML = maxLenght - this.value.length;
    //  count.innerHTML =  this.value.length;
    count.innerHTML =  `${this.value.length} / ${maxLenght} characters` ;
    if (this.value.length == maxLenght ) {
        textarea.style.borderColor = "red";
       //textarea.classList.add("full");
    }else{
        textarea.style.borderColor = "green";
    }
}