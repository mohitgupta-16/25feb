let tableData = [];

const marksTable = document.querySelector("#marks-table");
const marksTableBody = marksTable.querySelector("tbody");
const addRowBtn = document.querySelector("#add-row-btn");

addRowBtn.addEventListener("click", () => {
    const rowCount = marksTableBody.rows.length;

    const row = marksTableBody.insertRow();

    const idCell = row.insertCell();
    const nameCell = row.insertCell();
    const rollCell = row.insertCell();
    const subjectCell = row.insertCell();
    const marksCell = row.insertCell();
    const markedByCell = row.insertCell();
    const actionCell = row.insertCell();

    idCell.textContent = rowCount + 1;
    nameCell.innerHTML = '<input type="text">';
    rollCell.innerHTML = '<input type="text">';
    subjectCell.innerHTML = '<input type="text">';
    marksCell.innerHTML = '<input type="text">';
    markedByCell.innerHTML = '<input type="text">';
    actionCell.innerHTML = '<button class="save-row-btn">Save</button>';

    const saveBtn = actionCell.querySelector(".save-row-btn");
    saveBtn.addEventListener("click", () => {
        const name = nameCell.querySelector("input").value.trim();
        const roll = rollCell.querySelector("input").value.trim();
        const subject = subjectCell.querySelector("input").value.trim();
        const marks = marksCell.querySelector("input").value.trim();
        const markedBy = markedByCell.querySelector("input").value.trim();

        // Validating input data
        if (!name || !roll || !subject || !marks || !markedBy) {
            alert("Please fill in all fields.");
            return;
        }
        if (isNaN(marks)) {
            alert("Please enter a valid number for the marks.");
            return;
        }
        if (!markedBy.includes("@") || !markedBy.includes(".")) {
            alert(
                "Please enter a valid email address for the marked by field."
            );
            return;
        }

        const newRow = {
            id: rowCount + 1,
            student_name: name,
            student_roll: roll,
            subject,
            marks: Number(marks),
            markedBy,
        };
        tableData.push(newRow);

        updateTable();
    });
});

function updateTable() {
    marksTableBody.innerHTML = "";

    for (let i = 0; i < tableData.length; i++) {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = tableData[i].id;
        row.appendChild(idCell);

        const studentNameCell = document.createElement("td");
        const studentNameInput = document.createElement("input");
        studentNameInput.type = "text";
        studentNameInput.value = tableData[i].student_name;
        studentNameCell.appendChild(studentNameInput);
        row.appendChild(studentNameCell);

        const studentRollCell = document.createElement("td");
        const studentRollInput = document.createElement("input");
        studentRollInput.type = "text";
        studentRollInput.value = tableData[i].student_roll;
        studentRollCell.appendChild(studentRollInput);
        row.appendChild(studentRollCell);

        const subjectCell = document.createElement("td");
        const subjectInput = document.createElement("input");
        subjectInput.type = "text";
        subjectInput.value = tableData[i].subject;
        subjectCell.appendChild(subjectInput);
        row.appendChild(subjectCell);

        const marksCell = document.createElement("td");
        const marksInput = document.createElement("input");
        marksInput.type = "text";
        marksInput.value = tableData[i].marks;
        marksCell.appendChild(marksInput);
        row.appendChild(marksCell);

        const markedByCell = document.createElement("td");
        const markedByInput = document.createElement("input");
        markedByInput.type = "text";
        markedByInput.value = tableData[i].markedBy;
        markedByCell.appendChild(markedByInput);
        row.appendChild(markedByCell);

        marksTableBody.appendChild(row);
    }
}
