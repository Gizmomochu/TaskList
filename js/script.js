{
    
    const tasks = [
        {
            content: "Nowe zadanie",
            done: false,
        },
        {
            content: "Zakończone zadanie",
            done: true,
        },
    ];
    
    const render = () => {
        let htmlString = "";
        
        for (const task of tasks) {
            htmlString += `
            <li${task.done ? " style=\"text-decoration: line-through\"" : ""}>
            ${task.content}
            </li>
            `;
        }
        
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };
    
const addNewTask = (newTaskContent) => {
    tasks.push({
        content: newTaskContent,
    });
    render();
}

const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-taskInput").value.trim();
    
    if (newTaskContent === "") {
        return;
    }
    
    addNewTask(newTaskContent);
}

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}