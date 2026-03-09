let items = document.querySelectorAll("#main > div");
let inp = document.getElementById("inp");
let clearr = document.getElementById("clear");
let finaltotal=document.getElementById("total")
let eraser=document.getElementById("erase")


function clearInput() {
  inp.value = "";
}
function totalvalue() {
  inp.value = eval(inp.value);
}

clearr.addEventListener("click", function () {
  clearInput();
});
eraser.addEventListener("click", function () {
inp.value = inp.value.substring(0, inp.value.length - 1);
});
finaltotal.addEventListener("click", function () {
  totalvalue();
});
items.forEach((element) => {
  element.addEventListener("click", function () {
        if (this.textContent=="Clear" || this.textContent=="="  || this.textContent=="Erase" ) {  

        }
        else{
            inp.value += this.textContent;
        }
  });
});
