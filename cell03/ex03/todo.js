// โหลด TODO list จาก cookie ตอนเปิดหน้าเว็บ
window.onload = function () {
  loadTodos();
};

// ปุ่ม New
document.getElementById("newBtn").addEventListener("click", function () {
  let task = prompt("Enter your new TO DO:");
  if (task && task.trim() !== "") {
    addTodo(task.trim());
    saveTodos();
  }
});

// ฟังก์ชันเพิ่ม TODO ไปบนสุด
function addTodo(text) {
  let todoDiv = document.createElement("div");
  todoDiv.className = "todo";
  todoDiv.textContent = text;

  // คลิกเพื่อลบ
  todoDiv.addEventListener("click", function () {
    if (confirm("Do you want to remove this TO DO?")) {
      todoDiv.remove();
      saveTodos(); // บันทึกหลังลบ
    }
  });

  let list = document.getElementById("ft_list");
  list.insertBefore(todoDiv, list.firstChild);
}

// ฟังก์ชันเก็บ TODO ลง cookie (7 วัน)
function saveTodos() {
  let todos = [];
  document.querySelectorAll(".todo").forEach(todo => {
    todos.push(todo.textContent);
  });
  document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/; max-age=" + 7*24*60*60;
}

// ฟังก์ชันโหลด TODO จาก cookie
function loadTodos() {
  let cookies = document.cookie.split("; ");
  let todoCookie = cookies.find(row => row.startsWith("todos="));
  if (todoCookie) {
    let todos = JSON.parse(decodeURIComponent(todoCookie.split("=")[1]));
    todos.forEach(todo => addTodo(todo));
  }
}
