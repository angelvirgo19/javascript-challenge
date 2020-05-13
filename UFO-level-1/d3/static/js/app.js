// from data.js
var tableData = data;


// Select the filter button
var filter = d3.select("#search");


// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(tableData);
loadtable(tableData);

function loadtable(tableData) {

    tableData.forEach((infos) => {
        // Creating table rows for each new row of UFO data
        var newrow = tbody.append("tr");
        //Iterating through each row
        Object.entries(infos).forEach(([key, value]) => {
            // Creating cells for posting table data
            var cell = newrow.append("td");
            cell.text(value);
        });
    });

}

// Create event handlers 
filter.on("click", filterData);


function filterData() {

    // Filter on date

    // Prevent the page from refreshing
    d3.event.preventDefault();

    tbody.html("");

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    var newData = tableData.filter(infor => infor.datetime === inputValue);

    console.log(newData);

    newData.forEach((newInput) => {
        console.log(newInput);
        var row = tbody.append("tr");
        Object.entries(newInput).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });


    // loadtable(tableData);
}

// Reset the table to show all content

function handleResetButtonClick() {
    loadtable(tableData);
}

// To render table with all content:
// loadtable(tableData);