// ---design data---
const TODOLIST_TASK = ('TODOLIST_TASK')
let data = [
    {
        task: 'Run 2 km',
        is_complete: true
    },
    {
        task:'Read book',
        is_complete: false
    }
]
// --- saveData---
const saveData = (data) => {
    localStorage.setItem(TODOLIST_TASK, JSON.stringify(data))
}
// saveData(data);
// ---- loadData ---
const loadData = () => {
    let data;
    data = data?data:[];
    data = JSON.parse(localStorage.getItem(TODOLIST_TASK))
    return data
}
// data = loadData();
// console.log(data)
//---- addTask---
const addTask = (new_task) =>{
    let data;
    data = loadData();
    data = [...data, new_task]
    saveData(data)
}

// ----createTasksItem----
const createTasksItem = (task,is_complete,index) =>{
    return `
        <li class="task-item" index= ${index} is-complete = ${is_complete}>
            <span class='task' onclick="markTasksComplete(${index})">${task}</span>
            <div class="task-action">
                <button onclick="pusheditTasks(${index})">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>                              
                </button>
                <button onclick="deleteTasks(this,${index})">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>                              
                </button>
            </div>
        </li>   `
}
// --- renderTask ---
const renderTask = () =>{
    let data,ulTaskHTML, ulTasks, task_result, count_complete;
    data= loadData();
    task_result = document.querySelector('.task-result');
    count_complete = 0
    ulTasks = document.querySelector('ul.tasks')
    ulTaskHTML = data.map((element, index)=>{
        if(element.is_complete == true) count_complete++;
        return createTasksItem(element.task,element.is_complete,index)
    });
    task_result.textContent = count_complete>0?`Years, ${count_complete} tasks complete!`:""
    ulTasks.innerHTML = ulTaskHTML.join('');
}

// --- markTasksComplete---
const markTasksComplete = (index) => {
    // console.log(index)
    let data;
    data = loadData();
    data[index].is_complete = data[index].is_complete == true?false:true
    saveData(data)
    // console.log(data[index])
    renderTask();
}
// ----deleteTask---
const deleteTasks = (element, index) => {
    let data;
    let delete_confirm = confirm('Bạn có thực sự muốn xóa công việc không?');
    if(delete_confirm == false) return false
    data = loadData();
    data.splice(index,1)
    saveData(data);
    // element.closest('.task-item').remove();
    renderTask();
}
// ---pusheditTask---
const pusheditTasks = (index) => {
    let data;
    data = loadData();
    const btn = document.querySelector("#add_task button")
    const task = document.querySelector("#task")
    task.value = data[index].task;
    task.setAttribute('index',index)
    btn.innerText = "EDIT TASK"
}
//---editTask---
const editTask = (task, index) =>{
    const btn = document.querySelector("#add_task button")
     let data = loadData();
    data[index].task = task;
    saveData(data)
    btn.innerText = "ADD TASK"
}
// ---save editTask and addTask----
const formAddTask = document.forms.add_task;
// console.log(formAddTask)
formAddTask.addEventListener('submit', (e) =>{
    let new_task;
    const task = document.querySelector('#task')
    const index =task.getAttribute('index');
    if(task.value.length<2){
        alert('Tên công việc phải có từ 2 kí tự trở lên.Enter your Task!')
        return false;
    }
    if(index){
        editTask(task.value, index)
        task.removeAttribute('index')
    }else{
        new_task = {
            task: task.value ,
            is_complete: false
        };
        addTask(new_task)
    }
    renderTask();
    task.value = '';
    // console.log(loadData())
    e.preventDefault();
})
// --- Tạo phím tắt ESC ---
document.addEventListener('keyup', (e) => {
    const task = document.querySelector("#task")
    // console.log(e.which)
    if(e.which == 27){
        task.value = "";
        const btn = document.querySelector("#add_task button")
        btn.innerText = "ADD TASK"
    }
})

renderTask();