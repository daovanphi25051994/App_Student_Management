let arrayStudents = [];
let arrayFindStudents = [];

function showTable(arr) {
    let contentTable = "";
    contentTable += "<table><tr><th class='col1'>STT</th><th class='col2'>Name Students</th></tr>";
    for (let i = 1; i <= arr.length; i++) {
        contentTable += "<tr><td class='col1'>" + i + "</td><td class='col2'>" + arr[i - 1]
            + "</td><td class='col3'><button id='btn-fix' onclick='fixStudent(" + i + ")'>Fix</button></td><td class ='col4'><button id='btn-delete' onclick='deleteStudent(" + i + ")'>Delete</button></td></tr>";
    }
    contentTable += "</table>";
    document.getElementById("table").innerHTML = contentTable;
}

function addStudent() {
    let nameStudent = document.getElementById("input-name").value;
    if (nameStudent !== "") {
        arrayStudents.push(nameStudent);
        showTable(arrayStudents);
        document.getElementById("input-name").value = "";
    }
}


function searchStudent() {
    arrayFindStudents = [];
    let nameStudent = document.getElementById("input-name").value;
    if (nameStudent !== "") {
        for (let i = 0; i < arrayStudents.length; i++) {
            if (arrayStudents[i].indexOf(nameStudent) !== -1) {
                arrayFindStudents.push(arrayStudents[i]);
            }
        }
        showTable(arrayFindStudents);
        document.getElementById("input-name").value = "";
    }
}

function deleteStudent(index) {
    let isAgree = confirm("Do you want to delete ?");
    if (isAgree) {
        arrayStudents.splice(index - 1, 1);
    }
    showTable(arrayStudents);
}


function fixStudent(index) {
    let fixed = prompt("Bạn muốn đổi thành : ", arrayStudents[index - 1]);
    if (fixed !== null) {
        arrayStudents[index - 1] = fixed;
    }
    showTable(arrayStudents);
}

function addStudents(event) {
    switch (event.keyCode) {
        case 13:
            addStudent();
    }
}


window.onload = showTable(arrayStudents);

function setStudent() {
    window.addEventListener("keydown", addStudents)
}

