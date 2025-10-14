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


    task_container.appendChild(task);        // ✅ add it to the page
    task_container.appendChild(close_task);

    close_task.addEventListener('click', () =>{
        task_container.remove();
    }
    )

    counter += 1;
}
)




