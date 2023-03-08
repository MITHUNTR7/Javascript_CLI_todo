
let todo = [];

while (true) {
    let command = prompt("What would you like to do?");

    if (command === "new") {
        let new_todo = prompt("Enter new todo");
        todo.push(new_todo);
        console.log(`${new_todo} added to list`);

    }
    else if (command === "list") {
        console.log("**********");
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("**********");
    }
    else if (command === "delete") {
        let delete_todo = parseInt(prompt("Enter index of todo to delete"));
        todo.splice(delete_todo, 1);
    }

    else if (command === "quit") {
        break;
    }

    else {
        continue;
    }
}

