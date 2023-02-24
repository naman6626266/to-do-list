import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, update, remove } from "firebase/database";
import { FormCheck, Button } from "react-bootstrap";

import firebaseApp from "../firebase";
import { Todo } from "../types";

const TodoList = () => {
  const db = getDatabase(firebaseApp);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    const todoRef = ref(db, "/todos");

    onValue(todoRef, (snapshot) => {
      const todos = snapshot.val();
      const newTodoList: Todo[] = [];

      for (let id in todos) {
        newTodoList.push({ id, ...todos[id] });
      }

      setTodoList(newTodoList);
    });
  }, [db]);

  const changeTodoCompletion = (todo: Todo) => {
    const todoRef = ref(db, "/todos/" + todo.id);
    update(todoRef, { done: !todo.done });
  };

  const removeForm = (todo: Todo) => {
    const db = getDatabase();
    const todoRef = ref(db, "/todos/" + todo.id);
    remove(todoRef).then(() => {
      alert("location removed");
    });
  };

  

  return (
    <div>
      <h2 className="m-3">Tasks..</h2>
      {todoList.map((todo, index) => {
        return (
          <div key={index} className= "m-4 d-flex align-items-center gap-4">
            <FormCheck
              key={index}
              checked={todo.done}
              onChange={() => changeTodoCompletion(todo)}
            />
            <h4>{todo.title}</h4>
            <Button variant="danger" onClick={()=>removeForm(todo)}>Delete</Button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
