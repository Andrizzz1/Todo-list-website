const savedname = JSON.parse(localStorage.getItem("saveName"));
const savedAbout = JSON.parse(localStorage.getItem("saveAbout"));
const back_btn = document.querySelector('#back-btn');
const js_add_btn = document.querySelector('#JS-ADD-BTN');
const todo_elements = document.querySelector('.todo-elements');
const value_maker = document.querySelector('#value-maker');

window.addEventListener('load', () => {
    document.title = `Welcome, ${savedname}`;
    document.querySelector('.user-title').innerHTML = `${savedname}'s todo list`;
    document.querySelector('.list-container h1').textContent = `${savedAbout} list`;
});

back_btn.addEventListener('click', () => {
    window.location.href = 'todolist.html';
});

let input_values = [];

js_add_btn.addEventListener('click', () => {
    const newValue = value_maker.value.trim();
    if (newValue === "") return;

    input_values.push(newValue);
    value_maker.value = '';

    // Create todo container
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("circleCheck");

    // Create text
    const text = document.createElement("p");
    text.textContent = newValue;

    // When checkbox is clicked, toggle 'checked' class
    checkbox.addEventListener("change", () => {
        text.classList.toggle("checked");
    });

    // Append to container
    todoItem.appendChild(checkbox);
    todoItem.appendChild(text);

    // Append container to main todo list
    todo_elements.appendChild(todoItem);
});
