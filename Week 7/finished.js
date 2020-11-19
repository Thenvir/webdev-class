var list = document.getElementById("list");
var userInput = document.getElementById("userInput");

var greeting = "hello";

var randomNumber = Math.random() * 6;

console.log(randomNumber);

function addToList() {
  // console.log(userInput.value);
  var item = document.createElement("li");
  item.innerText = userInput.value;

  list.appendChild(item);
}

