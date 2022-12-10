var body = document.querySelector("body");
var div = document.getElementsByClassName("#div");
var input = document.querySelector("#input");
var submit = document.querySelector("#submit");
var form = document.querySelector("#form");
var result = document.querySelector("#result");

body.style.backgroundColor = "green";
console.log(result);

input.style.padding = "12px 0px 12px 50px";
input.style.fontSize = "22px"
input.style.borderRadius = "15px"
submit.style.padding = "12px 50px 12px 50px";
submit.style.fontSize = "22px";
submit.style.borderRadius = "15px";

form.style.display = "grid";
form.style.gridTemplateColumns = "auto auto"
form.style.justifyContent = "center"
form.style.gap = "20px";
form.style.margin = "100px 0";
result.style.color = "white";
result.style.fontSize = "42px";
result.style.margin = "100px 200px";




form.addEventListener("submit", function (event){
    event.preventDefault();
    if (input.value % 3 === 0 && input.value % 5 === 0){
        result.textContent = "FizzBuzz";
    }
    else if (input.value % 3 === 0 ){
        result.textContent = "Fizz";
    }
    else if (input.value % 5 === 0){
        result.textContent = "Buzz";
    }
    else {
        result.textContent = input.value;
    }
}
)



