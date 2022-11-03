const inputText = document.querySelector(".input input");
const addvalue = document.querySelector(".input button");
const todoList = document.querySelector(".todoList");

inputText.onkeyup = () => {
    let getType = inputText.value;

    if (getType.trim() != 0) {
        addvalue.classList.add("active");
    }
    else {
        addvalue.classList.remove("active");
    }
}

doList();

addvalue.onclick = () => {
    let getType = inputText.value;

    if (getType != '') {
        let memo = localStorage.getItem("New List");

        if (memo === null) {
            todoArr = [];
        }
        else {
            todoArr = JSON.parse(memo);
        }

        todoArr.push(getType);
        localStorage.setItem("New List", JSON.stringify(todoArr));
        doList();
    }
    else {
        alert("There is nothing in list please enter!")
    }
}

function doList() {
    let memo = localStorage.getItem("New List");

    if (memo == null) {
        todoArr = [];
    }
    else {
        todoArr = JSON.parse(memo);
    }

    let newList = '';
    todoArr.forEach((element, index) => {
        newList += `<li>${element}<span class="done" onclick="done(${index})"><i class="fa-solid fa-thumbs-up"></i></span> <span onclick="Delete(${index})"><i class="fa-solid fa-trash-can"></i></span></li>`;
    });

    todoList.innerHTML = newList;
    inputText.value = '';
}

function Delete(index) {
    let memo = localStorage.getItem("New List");
    todoArr = JSON.parse(memo);

    todoArr.splice(index, 1);
    localStorage.setItem("New List", JSON.stringify(todoArr));
    doList();
}


function done(index) {
    let memo = localStorage.getItem("New List");
    todoArr = JSON.parse(memo);

    todoArr[index] = todoArr[index].strike();
    localStorage.setItem("New List", JSON.stringify(todoArr));
    doList();

}

clearAllBtn.onclick = () => {
    localStorage.removeItem("New List");
    addvalue.classList.remove("active");
    clearAllBtn.classList.remove("active");
    doList();
}
