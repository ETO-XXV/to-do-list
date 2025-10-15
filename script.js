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
        } else {
            task.classList.remove('completed');
            task.style.textDecoration = "none";
            task.style.color = "white";
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


