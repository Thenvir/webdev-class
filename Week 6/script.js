// Simply have an html page with an H1 tag with an id of "title" in order for the clock to function!
// Make sure you link the script.js file like so: "<script src="script.js"> </script>"

// Access the H1
var title = document.getElementById("title");

// Date Object
function showTime() {
  var time = new Date();
  // title.innerText = time;

  var hours = time.getHours();
  if(hours > 12) {
    hours = hours - 12;
  }
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  title.innerText = hours + " : " + minutes + " : " + seconds;
}

setInterval(showTime, 1000);
