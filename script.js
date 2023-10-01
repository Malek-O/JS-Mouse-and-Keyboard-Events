function filterTeam() {
    let input = document.getElementById("search");
    let value = input.value.toLowerCase();
    let tables = document.querySelectorAll(".match");
    for (tables of tables) {
        let rows = document.querySelectorAll("tbody tr");
        Filter(rows, 1, value);
    }
}

function filterByٌRound() {
    let menuItem = document.getElementsByClassName("selectRound")[0];
    let value = menuItem.value.toLowerCase();
    let tables = document.querySelectorAll(".match");
    for (tables of tables) {
        let rows = document.querySelectorAll("tbody tr");
        Filter(rows, 2, value);
    }
}

function filterWinner() {
    let checkbox = document.getElementById("box");
    let value = checkbox.checked;
    if (value) {
        let tables = document.querySelectorAll(".match");
        for (tables of tables) {
            let rows = document.querySelectorAll("tbody tr");
            Filter(rows, 3, "نعم");
        }
    } else {
        let tables = document.querySelectorAll(".match");
        for (tables of tables) {
            let rows = document.querySelectorAll("tbody tr");
            Filter(rows, 1, "");
        }
    }
}

function Filter(rows, column, word) {
    for (let i = 0; i < rows.length; i++) {
        let td;
        if (rows[i].getElementsByTagName("td").length) {
            td = rows[i].getElementsByTagName("td")[column];
            let txtValue = td.innerText
            if (txtValue.toLowerCase().indexOf(word) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}