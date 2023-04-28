// Lawrence Arundel CS 465 May 2023 

// Sources:
// Express, E. (2022, February 12). Cookie-parser. Express cookie-parser middleware., from https://expressjs.com/en/resources/middleware/cookie-parser.html 
// Express, E. (2022, February 12). Middleware Morgan., Middleware Morgan., from https://expressjs.com/en/resources/middleware/morgan.html
// GeeksForGeeks, G. F. G. (2023, March 16). Express.js res.render() function. GeeksforGeeks., from https://www.geeksforgeeks.org/express-js-res-render-function/ 
// GeeksForGeeks, G. F. G. (2023, March 16). Express.js express.Router() Function. GeeksforGeeks., from https://www.geeksforgeeks.org/express-js-express-router-function/
// Iconfinder, I. (2022, May 11). 0 user+login in Emoji &amp; Avatars category icons. Iconfinder., from https://www.iconfinder.com/emoji-avatars-icons?q=user%2Blogin 
// Krisdian, K. (2022, August 30). Millions of PNG images, backgrounds and vectors for free download. Pngtree., from https://pngtree.com/element/down?id=NDYzNzQwNw&amp;type=1&amp;time=1682209061&amp;token=Yjg5NDVjMGM5OWRmZTQ5ZjJiYmEwNDIyZTFjYThhNDY&amp;t=0 
// Megida, D. (2022, April 25). Module.exports – how to export in node.js and JavaScript. freeCodeCamp.org., from https://www.freecodecamp.org/news/module-exports-how-to-export-in-node-js-and-javascript/#:~:text=module.exports%20is%20an%20object,with%20the%20require%20global%20method. 
// Mozilla, M. (2022, February 1). Express tutorial part 4: Routes and controllers - learn web development: MDN. Learn web development | MDN., from https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes 
// Mozilla, M. (2022, February 1). Express/Node introduction., Express/Node introduction., from https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
// NPM, N. P. M. (2022, May 11). HTTP-errors. npm., from https://www.npmjs.com/package/http-errors 
// Philiapp, P. (2022, February 2). X mark letters. X mark symbols - ✖., from https://www.piliapp.com/symbol/x-mark/ 
// Smith, D. (2021, April 11). Better placeholder. Better Placeholder., from https://betterplaceholder.com/ 
// SNHU, S. N. H. U. (2023, May 1). CS 465 Full Stack Guide., from https://learn.snhu.edu/d2l/home 
// W3Schools, W. S. (2022, April 11). Window history.back(). History back() Method., from https://www.w3schools.com/jsref/met_his_back.asp 
// W3Schools, W. S. (2022, April 11). HTML Entities. HTML Entities., from https://www.w3schools.com/html/html_entities.asp


// function used to select the table by element depending on the tab presented
function addTableListeners(table) {
  var rows = table.getElementsByTagName("tr");

  for (var i = 1; i < rows.length; i++) {
    rows[i].addEventListener("click", function () {
      var current = table.getElementsByClassName("selected-table");
      if (current.length > 0) {
        current[0].className = current[0].className.replace("selected-table", "");
      }
      this.className += " selected-table";
    });
  }

  document.addEventListener("click", function (e) {
    if (!table.contains(e.target)) {
      for (var i = 1; i < rows.length; i++) {
        rows[i].classList.remove("selected-table");
      }
    }
  });
}

var beaches_table = document.getElementById("beaches-table");
var mountains_table = document.getElementById("mountains-table");
var cruises_table = document.getElementById("cruises-table");

addTableListeners(beaches_table);
addTableListeners(mountains_table);
addTableListeners(cruises_table);


// code that selects all tables and changes color accordingly
// allows table to show salmon color if it is selected.
let selectedRow = null;

const tables = document.querySelectorAll('table');

const rows = document.querySelectorAll('tr');
rows.forEach(row => {
  row.addEventListener('click', (event) => {
    const clickedRow = event.currentTarget;
    if (selectedRow && selectedRow !== clickedRow) {
      selectedRow.classList.remove('salmon');
    }
    clickedRow.classList.toggle('salmon');
    selectedRow = clickedRow;
  });
});

document.addEventListener('click', (event) => {
  const isClickInsideTable = tables[0].contains(event.target) ||
    tables[1].contains(event.target) ||
    tables[2].contains(event.target);
  if (!isClickInsideTable && selectedRow) {
    selectedRow.classList.remove('salmon');
    selectedRow = null;
  }
});

// function that decides whether to display the table or not within the application
function openTable(evt, tableName) {
  var i, tableContent, tableTravel;
  tableContent = document.getElementsByClassName("table-content");
  for (i = 0; i < tableContent.length; i++) {
    tableContent[i].style.display = "none";
  }
  tableTravel = document.getElementsByClassName("table-travel");
  for (i = 0; i < tableTravel.length; i++) {
    tableTravel[i].className = tableTravel[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
  if (tableName === "Beaches") {
    document.getElementById("beaches-table").style.display = "table";
  } else if (tableName === "Cruises") {
    document.getElementById("cruises-table").style.display = "table";
  }
  else if (tableName === "Mountains") {
    document.getElementById("mountains-table").style.display = "table";

    var tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("table-travel");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tableName).style.display = "block";
    this.className += "active";

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.add("hidden"); // hide all tab contents
    }
    tablinks = document.getElementsByClassName("table-travel");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active"); // remove active class from all tab links
    }
    document.getElementById(tableName).classList.remove("hidden"); // show selected tab content
    this.classList.add("active"); // add active class to clicked tab link
  }
}

function goBackPage() {
  window.history.back();
}

function goForwardPage() {
  window.history.forward();
}

function stopProcess() {
  window.location.reload();
}

function goHomeScreen() {
  window.location.href = "/"
}

function navigateToLink(event) {
  event.preventDefault(); // Prevent form submission

  const websiteInput = document.getElementById('search-bar-address');
  const websiteValue = websiteInput.value.trim(); // Get the URL entered by the user, trimming whitespace

  if (websiteValue.toLowerCase().startsWith("https://travlr.com/travel") || websiteValue.toLowerCase().startsWith("travlr.com/travel")) { // If the URL is not empty
    window.location.href = "/travel"; // Navigate to the URL
  }
  else if (websiteValue.toLowerCase().startsWith("https://travlr.com/admin") || websiteValue.toLowerCase().startsWith("travlr.com/admin")) { // If the URL is not empty
    window.location.href = "/admin"; // Navigate to the URL
  }
  else if (websiteValue.toLowerCase().startsWith("https://travlr.com/signup") || websiteValue.toLowerCase().startsWith("travlr.com/signup")) { // If the URL is not empty
    window.location.href = "/signup"; // Navigate to the URL
  }
  else if (websiteValue.toLowerCase().startsWith("https://travlr.com/reservations") || websiteValue.toLowerCase().startsWith("travlr.com/reservations")) { // If the URL is not empty
    window.location.href = "/reservations"; // Navigate to the URL
  }
  else if (websiteValue.toLowerCase().startsWith("https://travlr.com/news") || websiteValue.toLowerCase().startsWith("travlr.com/news")) { // If the URL is not empty
    window.location.href = "/news"; // Navigate to the URL
  }
  else if (websiteValue.toLowerCase().startsWith("https://travlr.com/login") || websiteValue.toLowerCase().startsWith("travlr.com/login")) { // If the URL is not empty
    window.location.href = "/login"; // Navigate to the URL
  }
  else if (websiteValue.toLowerCase().startsWith("https://travlr.com/checkout") || websiteValue.toLowerCase().startsWith("travlr.com/checkout")) { // If the URL is not empty
    window.location.href = "/checkout"; // Navigate to the URL
  }
  else {
    window.location.href = "/users";
  }
}
function goSignUp() {
  window.location.href = "/signup";
}
