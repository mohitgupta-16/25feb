const addRowBtn = document.querySelector("#add-row-btn");
const tBody = document.querySelector("tbody");
const students = [];

function createTd(data, tr) {
    const td = document.createElement("td");
    const element = document.createElement(data.elementName);
    element.id = data.id;
    element.type = data.type;

    if (data.elementName == "button") {
        element.textContent = data.text;
        element.onClick = data.onClick;
    }

    if (data.elementName == "span") {
        element.textContent = data.text;
    }

    td.append(element);
    tr.append(td);
}

function renderTable() {
    tBody.innerHTML = "";

    const tr = document.createElement("tr");

    students.forEach((student) => {
        const tr = document.createElement("tr");

        // we need to create 6 tds
        const tds = [
            {
                elementName: "span",
                text: student.id,
            },
            {
                elementName: "span",
                text: student.student_name,
            },
            {
                elementName: "span",
                text: student.student_roll,
            },
            {
                elementName: "span",
                text: student.subject,
            },
            {
                elementName: "span",
                text: student.marks,
            },
            {
                elementName: "span",
                text: student.markedBy,
            },
        ];
    });

    tds.forEach((data) => createTd(data, tr));

    tBody.append(tr);
}

function saveData() {
    const name = document.querySelector("#name").value.trim();
    const rollNo = document.querySelector("#rollNumber").value.trim();
    const subject = document.querySelector("#subject").value.trim();
    const marks = document.querySelector("#marks").value.trim();
    const markedBy = document.querySelector("#markedBy").value.trim();
    const rowId = document.querySelector("#rowId");
    const saveBtn = document.querySelector("#save");

    if (!name || !rollNo || !subject || !marks || !markedBy) {
        alert("Please Fill in all Fields");
        return;
    }
    if (isNaN(marks)) {
        alert("Please enter a valid number for the marks.");
        return;
    }
    if (!markedBy.includes("@") || !markedBy.includes(".")) {
        alert("Please enter a valid email address for the marked by field.");
        return;
    }

    const student = {
        id: rowId,
        student_name: name,
        student_roll: rollNo,
        subject,
        marks,
        markedBy,
    };

    students.push(student);

    saveBtn.style.display = "none";

    alert("HI");

    renderTable();
}

function addNewRow() {
    const tr = document.createElement("tr");

    // creating array for 7 tds
    const tds = [
        {
            elementName: "span",
            id: "rowId",
            text: students.length + 1,
        },
        {
            elementName: "input",
            id: "name",
            type: "text",
        },
        {
            elementName: "input",
            id: "rollNumber",
            type: "number",
        },
        {
            elementName: "input",
            id: "subject",
            type: "text",
        },
        {
            elementName: "input",
            id: "marks",
            type: "number",
        },
        {
            elementName: "input",
            id: "markedBy",
            type: "email",
        },
        {
            elementName: "button",
            onClick: saveData,
            text: "Save",
            id: "save",
        },
    ];

    // adding all tds in tr
    tds.forEach((data) => {
        createTd(data, tr);
    });

    // adding in tbody
    tBody.append(tr);

    // document.querySelector('#save').addEventListener('click', saveData);
}

addRowBtn.addEventListener("click", addNewRow);
