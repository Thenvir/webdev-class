var userInput = document.getElementById("userInput");
var list = document.getElementById("list");

// The array holding the user's list items
// its whatever the database has, or an empty array if database is empty
var itemsArray = JSON.parse(localStorage.getItem('itemsArray')) || [];
// console.log(itemsArray);

function addToList(){
  // Get whatever the user typed
  // console.log(userInput.value);  

  // Same as item = "<li> </li>"
  // Adding the user's text inside the li
  var item = document.createElement("li");
  item.innerText = userInput.value;

  // add to items array
  itemsArray.push(userInput.value);
  // save to localstorage
  localStorage.setItem('itemsArray', JSON.stringify(itemsArray));

  // Finally, add to the ul so it can be shown on the html page
  list.appendChild(item);
}

function showList() {
  // array goes from 0 to array.length
  // array = [0, 1, 2, 3, 4] --> array.length = 5

  // Loop through the items array and add it to the ul on the html page
  // In effect, it shows all the items on the page
  for(var currentIndex=0; currentIndex<itemsArray.length; currentIndex++){
      var item = document.createElement("li");
      item.innerText = itemsArray[currentIndex];
      list.appendChild(item);
  }
}

// Call the function so the page can show the list as soon as it loads
showList();
