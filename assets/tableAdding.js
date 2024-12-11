// defining input fields
let nameInput = document.getElementById("NI");
let timeInput = document.getElementById("TI");
let dateInput = document.getElementById("DI");
let taskInputButton = document.getElementById("taskIB");
let section = document.getElementById("section");
let table = document.getElementById("maintable-body");
let deletionButton = 0;

taskInputButton.addEventListener("click", function(event) {
    event.preventDefault()
    // Create a new table
    
    section.appendChild(table);
    
    // Create a new table row
    let tableRow = document.createElement("tr");
    tableRow.id = "table-row";
    table.appendChild(tableRow);

    deletionButton = document.createElement("button");
    deletionButton.textContent = `Done`;
    deletionButton.id = `DB`;
    deletionButton.addEventListener("click", function(){
        tableRow.remove()
    });

    // Create table columns and add them to the row
    for (let i = 0; i < 4; i++) {
        let tableColumn = document.createElement("td"); // Use "td" for table cells
        switch (i) {
            case 0:
                tableColumn.textContent = `${nameInput.value}`;
                tableColumn.id = `name-input`;
                break;
            case 1:
                tableColumn.textContent = `${timeInput.value}`;
                tableColumn.id = `time-input`;
                break;
            case 2:
                tableColumn.textContent = `${dateInput.value}`;
                tableColumn.id = `date-input`;
                break;
            case 3:
                tableColumn.id = `deletion-column`;
                tableColumn.appendChild(deletionButton);
                break;
        }
        tableRow.appendChild(tableColumn);
    }

});
