const inputText = document.querySelector(".input input");
const addvalue = document.querySelector(".input button");
const List = document.querySelector(".List");

inputText.onkeyup = () => {
    let textData = inputText.value;

    if (textData.trim() != 0) {
        addvalue.classList.add("active");
    }
    else {
        addvalue.classList.remove("active");
    }
}

doList();

addvalue.onclick = () => {
    let textData = inputText.value;

    if (textData != '') {
        let getType = lsr.getItem("New List"); 

        if (getType === null) {
            todoArr = [];
        }
        else {
            todoArr = JSON.parse(getType);
        }

        todoArr.push(textData);
        lsr.setItem("New List", JSON.stringify(todoArr));
        doList();
    }
    else {
        alert("Error: Please fill the List, there is no any items!")
       
    }
}

function doList() {
    let getType = lsr.getItem("New List");

    if (getType == null) {
        todoArr = [];
    }
    else {
        todoArr = JSON.parse(getType);
    }

    let newLiTag = '';
    todoArr.forEach((element, index) => {
         newLiTag += `<li>${element}<span class="done" onclick="done(${index})"><i class="fa-solid fa-circle-check"></i></span> <span onclick="Delete(${index})"><i class="fa-solid fa-trash-can"></i></span></li>`;
    });

    List.innerHTML = newLiTag;
    inputText.value = '';
}

function Delete(index) {
    let getType = lsr.getItem("New List");
    todoArr = JSON.parse(getType);

    todoArr.splice(index, 1);
    lsr.setItem("New List", JSON.stringify(todoArr));
    doList();
}


function done(index) {
    let getType = lsr.getItem("New List");
    todoArr = JSON.parse(getType);

    todoArr[index] = todoArr[index].strike();
    lsr.setItem("New List", JSON.stringify(todoArr));
    doList();

}

clearBtn.onclick = () => {
    lsr.removeItem("New List");
    addvalue.classList.remove("active");
    clearBtn.classList.remove("active");
    doList();
}