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
//------------------------------------------------Referencing the button with id for date-----------------------------------------------------------------------------
var buttonDate = d3.select("#filter-btn-date");
// Select the form
var formDate = d3.select("#form_date");

// Event handlers for clicking the button or pressing the enter key
buttonDate.on("click", runEnterDate);
formDate.on("submit", runEnterDate);

function runEnterDate() {
    // Prevent page from refreshing
    d3.event.preventDefault();
    // Referencing the input field
    var input_date = d3.select("#datetime");
    // Get the value property of the input element
    var inputDateValue = input_date.property("value");
    
    var filteredDate = tableData.filter(dateInput => dateInput.datetime === inputDateValue);
    buildTable(filteredDate);  
    if (inputDateValue==="") {buildTable(data)};
};


//------------------------------------------------Referencing the button with id for city------------------------------------------------------------------------------
var buttonCity = d3.select("#filter-btn-city");
// Select the form
var formCity= d3.select("#form_city");

// Event handlers flor clicking the button or pressing the enter key
buttonCity.on("click", runEnterCity);
formCity.on("submit", runEnterCity);

function runEnterCity() {
    // Prevent page from refreshing
    d3.event.preventDefault();
    // Referencing the input field
    var input_city = d3.select("#city");
    // Get the value property of the input element
    var inputCityValue = input_city.property("value");
    
    var filteredCity = tableData.filter(cityInput => cityInput.city === inputCityValue);
    buildTable(filteredCity);  
    if (inputCityValue==="") {buildTable(data)};
};

//------------------------------------------------Referencing the button with id for state---------------------------------------------------------------------------
var buttonState = d3.select("#filter-btn-state");
// Select the form
var formState= d3.select("#form_state");

// Event handlers flor clicking the button or pressing the enter key
buttonState.on("click", runEnterState);
formState.on("submit", runEnterState);

function runEnterState() {
    // Prevent page from refreshing
    d3.event.preventDefault();
    // Referencing the input field
    var input_state = d3.select("#state");
    // Get the value property of the input element
    var inputStateValue = input_state.property("value");
    
    var filteredState = tableData.filter(stateInput => stateInput.state === inputStateValue);
    buildTable(filteredState);  
    if (inputStateValue==="") {buildTable(data)};
};

//------------------------------------------------Referencing the button with id for country--------------------------------------------------------------------------
var buttonCountry = d3.select("#filter-btn-country");
// Select the form
var formCountry= d3.select("#form_country");

// Event handlers flor clicking the button or pressing the enter key
buttonCountry.on("click", runEnterCountry);
formCountry.on("submit", runEnterCountry);

function runEnterCountry() {
    // Prevent page from refreshing
    d3.event.preventDefault();
    // Referencing the input field
    var input_country = d3.select("#country");
    // Get the value property of the input element
    var inputCountryValue = input_country.property("value");
    
    var filteredCountry = tableData.filter(stateCountry => stateCountry.country === inputCountryValue);
    buildTable(filteredCountry);  
    if (inputCountryValue==="") {buildTable(data)};
};

//------------------------------------------------Referencing the button with id for shape---------------------------------------------------------------------------
var buttonShape = d3.select("#filter-btn-shape");
// Select the form
var formShape= d3.select("#form_shape");

// Event handlers flor clicking the button or pressing the enter key
buttonShape.on("click", runEnterShape);
formShape.on("submit", runEnterShape);

function runEnterShape() {
    // Prevent page from refreshing
    d3.event.preventDefault();
    // Referencing the input field
    var input_shape = d3.select("#shape");
    // Get the value property of the input element
    var inputShapeValue = input_shape.property("value");
    
    var filteredShape = tableData.filter(stateShape => stateShape.shape === inputShapeValue);
    buildTable(filteredShape);  
    if (inputShapeValue==="") {buildTable(data)};
};