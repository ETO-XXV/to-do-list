class task_info {
    constructor(name) {
        this.name = name;
        this.completed = false;
        this.deadline = null;
        this.id = null;
    }
}

const tasks = [];

const container_control = document.querySelector('.container_control');
const add_tasks = document.querySelector('.search_bar');

const add = document.querySelector('.button_add');
const search = document.querySelector('.search');
const save = document.querySelector('.save');
const load = document.querySelector('.load');

const list = document.querySelector('.tasks_list');
const pop_up = document.querySelector('.pop_up');

const task_input = document.querySelector('.task_name');
const deadline_input = document.querySelector('.task_deadline');

const submit = document.querySelector('.confirm');
const cancel = document.querySelector('.cancel');

let counter = 0 ;

const buttons = document.querySelectorAll('.circle-btn');

add.addEventListener('click', function() {
//    const close = document.createElement('img');
//   close.src = "close.svg";
//  close.className = "close";

    list.style.filter = "blur(6px)";
    container_control.style.filter = "blur(6px)";
    pop_up.style.display = "flex";    

}

);

cancel.addEventListener('click', function() {
    list.style.filter = "none";
    container_control.style.filter = "none";
    pop_up.style.display = "none";
});

submit.addEventListener('click', function() {

    const task_container = document.createElement('div');
    task_container.className = "task_container";
    task_container.id = "task_container_" + counter;

    list.appendChild(task_container);


    const close_task = document.createElement('button');
    close_task.className = "circle-btn";
    close_task.id = "close_" + counter;


    const task = document.createElement('div');
    task.className = "task_item";
    task.textContent = task_input.value; // ✅ put the value inside the div
    task.id = "task_" + counter;

    const check_box = document.createElement('input')
    check_box.type = "checkbox";
    check_box.className = "check_box";
    check_box.id = "check_box_" + counter;

    check_box.addEventListener('change', () => {
        if (check_box.checked) {
            task.style.textDecoration = "line-through";
            task.style.color = "grey";
            tasks[counter-1].completed = true;
        } else {
            task.classList.remove('completed');
            task.style.textDecoration = "none";
            task.style.color = "white";
            tasks[counter-1].completed = false;
        }
    });

    task_container.appendChild(task);        // ✅ add it to the page
    task_container.appendChild(close_task);
    task_container.appendChild(check_box);


        close_task.addEventListener('click', () => {
        task_container.classList.add('removing');
        task_container.addEventListener('transitionend', () => {
            task_container.remove();
        }, { once: true });
    });
    
    tasks.push(new task_info(task_input.value));
    tasks[counter].deadline = deadline_input.value;
    tasks[counter].id = counter;

    counter += 1;

    list.style.filter = "none";
    container_control.style.filter = "none";
    pop_up.style.display = "none";

    console.log(tasks);
}

);

search.addEventListener('click', function() {
    search_query = add_tasks.value;
    const array_search = tasks.filter(task => task.name !== search_query );
    const array_search2 = tasks.filter(task => ( task.name === search_query  ||  search_query === "" ) );

    for (let i = 0; i < array_search.length; i++) {
        const task_element = document.getElementById("task_" + array_search[i].id);
        const task_container_element = document.getElementById("task_container_" + array_search[i].id);
        task_container_element.style.display = "none";
    }
    for (let i = 0; i < array_search2.length; i++) {
        const task_element = document.getElementById("task_" + array_search2[i].id);
        const task_container_element = document.getElementById("task_container_" + array_search2[i].id);
        task_container_element.style.display = "flex";
    }
});

save.addEventListener('click', function() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(JSON.stringify(tasks));
    localStorage.setItem('counter', counter.toString());
    alert('Tasks saved!');
});

load.addEventListener('click', function() {
const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    const savedCounter = parseInt(localStorage.getItem('counter'), 10);
    console.log(savedTasks);

    counter = savedCounter;   

    list.innerHTML = ''; // Clear existing tasks

    for (let i = 0; i < savedTasks.length; i++) {

    tasks.push(new task_info(savedTasks[i].name));    
    tasks[i].deadline = savedTasks[i].deadline;
    tasks[i].completed = savedTasks[i].completed;
    tasks[i].id = savedTasks[i].id;

    const task_container = document.createElement('div');
    task_container.className = "task_container";
    task_container.id = "task_container_" + counter;

    list.appendChild(task_container);


    const close_task = document.createElement('button');
    close_task.className = "circle-btn";
    close_task.id = "close_" + counter;


    const task = document.createElement('div');
    task.className = "task_item";
    task.textContent = savedTasks[i].name; // ✅ put the value inside the div
    task.id = "task_" + counter;

    const check_box = document.createElement('input')
    check_box.type = "checkbox";
    check_box.className = "check_box";
    check_box.id = "check_box_" + counter;

    if (savedTasks[i].completed) {
        check_box.checked = true;
        task.style.textDecoration = "line-through";
        task.style.color = "grey";
    }

    check_box.addEventListener('change', () => {
        if (check_box.checked) {
            task.style.textDecoration = "line-through";
            task.style.color = "grey";
            tasks[counter].completed = true;
        } else {
            task.classList.remove('completed');
            task.style.textDecoration = "none";
            task.style.color = "white";
            tasks[counter].completed = false;
        }
    });

    task_container.appendChild(task);        // ✅ add it to the page
    task_container.appendChild(close_task);
    task_container.appendChild(check_box);


        close_task.addEventListener('click', () => {
        task_container.classList.add('removing');
        task_container.addEventListener('transitionend', () => {
            task_container.remove();
        }, { once: true });
    });

}
    alert('Tasks loaded!');
});

