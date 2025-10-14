class task {
    constructor(name) {
        this.name = name;
        this.completed = false;
        this.date = new Date();
    }
}


const add_tasks = document.querySelector('.add_bar');
const add = document.querySelector('.button_add');
const list = document.querySelector('.tasks_list');

let counter = 0 ;

const buttons = document.querySelectorAll('.circle-btn');

add.addEventListener('click', function() {
//    const close = document.createElement('img');
//   close.src = "close.svg";
//  close.className = "close";

    const task_container = document.createElement('div');
    task_container.className = "task_container";
    task_container.id = "task_container_" + counter;

    list.appendChild(task_container);


    const close_task = document.createElement('button');
    close_task.className = "circle-btn";
    close_task.id = "close_" + counter;


    const task = document.createElement('div');
    task.className = "task_item";
    task.textContent = add_tasks.value; // ✅ put the value inside the div
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

    counter += 1;
}
)




