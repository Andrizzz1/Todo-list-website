const addBtn = document.querySelector('#add-todo');
const form = document.querySelector('.new-user-form');
const form_btn = document.querySelector('.new-user-form button');
const user_name = document.querySelector('#user-name');
const about_todo = document.querySelector('#about-todo');
const label_user = document.querySelector('#label-name');
const label_about = document.querySelector('#label-about');
const save_in_home_page = document.querySelector('.list-container h1');

addBtn.addEventListener('click', () => {
    form.classList.toggle('active');
});

form_btn.addEventListener('click', () => {
    const name = user_name.value.trim();
    const about = about_todo.value.trim();

    // Form validation
    if (!name && !about) {
        label_user.textContent = `Name is empty`;
        label_about.textContent = `About is empty`;
        return;
    } else if (!name) {
        label_user.textContent = `Name is empty`;
        return;
    } else if (!about) {
        label_about.textContent = `About is empty`;
        return;
    }

    // Reset labels
    label_user.textContent = '';
    label_about.textContent = '';

    // Store data
    localStorage.setItem("saveName", JSON.stringify(name));
    localStorage.setItem("saveAbout", JSON.stringify(about));

    // Reset form
    user_name.value = '';
    about_todo.value = '';
    form.classList.remove('active');

    // Navigate to todo list
    window.location.href = 'usertodo.html';
});

save_in_home_page.addEventListener('click', () => {
    window.location.href = 'usertodo.html'; // Navigate to the todo list page
});
