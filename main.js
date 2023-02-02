let button = document.getElementById("button");
let input = document.querySelector("input");
let messageShow = document.getElementById("msgbox");
let trash1Show = document.getElementById("btn1");
let trash2Show = document.getElementById("btn2");
let Show = document.getElementById("showing");
var s = document.getElementById("showing"),
  d = document.getElementById("destination");
function add() {
  if (input.value === "") {
    alert("This field is required");
  } else {
    messageShow.textContent = `${input.value}`;
    messageShow.classList.remove("message");
    messageShow.style.width = "130px";
    messageShow.style.border = "1px solid black";
    messageShow.style.textAlign = "start";
    trash2Show.classList.remove("trash2");
    trash1Show.classList.remove("trash1");
    trash2Show.style.margin = "5px";
    trash1Show.style.padding = "1.5px";
    trash2Show.style.padding = "1.5px";
    var clone = s.cloneNode(true);
    clone.removeAttribute("class");
    d.appendChild(clone);
    clone.classList.add("newTask");
    input.value = "";

    let taskComplete = document.querySelectorAll("#btn2");
    for (let i = 0; i < taskComplete.length; i++) {
      taskComplete[i].onclick = function () {
        this.parentNode.firstElementChild.style.textDecoration = "line-through";
        this.parentNode.classList.add("completed");
      };
    }

    let deleteTask = document.querySelectorAll("#btn1");
    for (let i = 0; i < deleteTask.length; i++) {
      deleteTask[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    let activedBtn = document.getElementById("boton2");
    activedBtn.addEventListener("click", function () {
      let task = document.querySelectorAll(".newTask");
      for (let i = 0; i < task.length; i++) {
        if (task[i].classList.contains("completed") == true) {
          task[i].style.display = "none";
        } else {
          task[i].style.display = "block";
        }
      }
    });

    let completedBtn = document.getElementById("boton3");
    completedBtn.addEventListener("click", function () {
      let task = document.querySelectorAll(".newTask");
      for (let i = 0; i < task.length; i++) {
        if (task[i].classList.contains("completed") != true) {
          task[i].style.display = "none";
        } else {
          task[i].style.display = "block";
        }
      }
    });

    let clearCompleted = document.getElementById("boton4");
    clearCompleted.addEventListener("click", function () {
      let task = document.querySelectorAll(".newTask");
      for (let i = 0; i < task.length; i++) {
        if (task[i].classList.contains("completed") == true) {
          task[i].remove();
        }
      }
    });

    let allBtn = document.getElementById("boton1");
    allBtn.addEventListener("click", function () {
      let task = document.querySelectorAll(".newTask");
      for (let i = 0; i < task.length; i++) {
        task[i].style.display = "block";
      }
    });
  }
}
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    add();
  }
});
button.addEventListener("click", () => {
  add();
});
