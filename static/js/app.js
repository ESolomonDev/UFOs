
// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

//function with the data.js passed as param
function buildTable(data) {
    //clear the html table/existing data
    tbody.html("");

    //each dataRow in data
    //to append a row and cells for each value
    data.forEach((dataRow) => {

        //wrap each entry in data.js in a tr tag onto the tbody
        let row = tbody.append("tr");

        //for each row wrap the data in a td to make it a cell in a table
        Object.values(dataRow).forEach((val) => {

            //append td onto each row
            let cell = row.append("td");
            cell.text(val);
        
        });//end inner for each

    });//end outter for each

}//end buildTable func scope

//func event listener for click
function handleClick(){
    // Grab the datetime value from the filter
    //get datetime in html tags and store in var
    let date = d3.select("#datetime").property("value");
    //asign tableData to a filteredData var
    let filteredData = tableData;

    // Check to see if a date was entered and filter the
    // data using that date.
    if(date){
        //store filtered data into var matching date value
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);