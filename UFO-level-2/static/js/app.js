// Get references to the tbody element, input field(s) and filter, reset buttons:
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $stateInput = document.querySelector("#state");
var $cityInput = document.querySelector("#city");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $filter = document.querySelector("#search");
var $reset = document.querySelector("#reset");

// Adding an event listener to the FilterButton:
$filter.addEventListener("click", handleFilterButtonClick);

// Adding an event listener to the ResetButton:
$reset.addEventListener("click", handleResetButtonClick);

// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Build table with all data:
function getTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < tableData.length; i++) {
        // printing current results object and fields
        var results = tableData[i];
        console.log(results)
        var fields = Object.keys(results);
        // Creating a new row in tbody
        var $newrow = $tbody.insertRow(i);
        for (var j = 0; j < fields.length; j++) {
            // For each field in results object, creating a new cell and setting data to be the current results field
            var field = fields[j];
            var $cell = $newrow.insertCell(j);
            $cell.innerText = results[field];
        }
    }
}

// Build table to show filtered data based on input:
function handleFilterButtonClick() {
    var datefilter = $dateInput.value;
    var statefilter = $stateInput.value.trim().toLowerCase();
    var cityfilter = $cityInput.value.trim().toLowerCase();
    var countryfilter = $countryInput.value.trim().toLowerCase();
    var shapefilter = $shapeInput.value.trim().toLowerCase();

    // Filter on date
    if (datefilter != "") {
        tableData = data.filter(function(results) {
            var resultsDate = results.datetime;
            return resultsDate === datefilter;
        });
    } else { tableData };

    // Filter on state
    if (statefilter != "") {
        tableData = tableData.filter(function(results) {
            var resultsState = results.state;
            return resultsState === statefilter;
        });
    } else { tableData };

    // Filter on city
    if (cityfilter != "") {
        tableData = tableData.filter(function(results) {
            var resultsCity = results.city;
            return resultsCity === cityfilter;
        });
    } else { tableData };

    // Filter on country
    if (countryfilter != "") {
        tableData = tableData.filter(function(results) {
            var resultsCountry = results.country;
            return resultsCountry === countryfilter;
        });
    } else { tableData };

    // Filter on shape
    if (shapefilter != "") {
        tableData = tableData.filter(function(results) {
            var resultsShape = results.shape;
            return resultsShape === shapefilter;
        });
    } else { tableData };

    getTable();
}

// Reset the table to show all content
function handleResetButtonClick() {
    getTable();
}

// To render table with all content:
getTable();