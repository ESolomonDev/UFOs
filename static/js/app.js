
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
    data.array.forEach((dataRow) => {

        //wrap each entry in data.js in a tr tag onto the tbody
        let row = tbody.append("tr");

        //for each row wrap the data in a td to make it a cell in a table
        Object.values(dataRow).forEach((val) => {
            //append td onto each row
            let cell = row.append("td");
            cell.text(val);
        });//end inner for each

    });//end outter for each
}//end function scope