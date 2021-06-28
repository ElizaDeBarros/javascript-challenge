//------------------------------------------------POPULATE TABLE----------------------------------------------------------------------------------------
// from data.js
var tableData = data;

// Select table body using D3
var tbody = d3.select("tbody");

// Select table  using D3
var table = d3.select("table");

// Loop through data and add items to table
function buildTable(data) {
tbody.html("");

data.forEach(sight => {
    var row = tbody.append("tr");
    row.append("td").text(sight.datetime);
    row.append("td").text(sight.city);
    row.append("td").text(sight.state);
    row.append("td").text(sight.country);
    row.append("td").text(sight.shape);
    row.append("td").text(sight.durationMinutes);
    row.append("td").text(sight.comments);
})
};
buildTable(data);

//------------------------------------------------MAKE PAGE DYNAMIC WITH FILTER---------------------------------------------------------------------------------------
// Referencing the button with id
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("#form");

// Event handlers flor clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    // Prevent page from refreshing
    d3.event.preventDefault();
    // Referencing the input field
    var input_field = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = input_field.property("value");
    
    var filteredData = tableData.filter(dateInput => dateInput.datetime === inputValue);
    buildTable(filteredData);  
    if (inputValue==="") {buildTable(data)};
};


