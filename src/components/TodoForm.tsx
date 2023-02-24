import { useState } from "react";
import React from 'react';

import { Button, Form } from "react-bootstrap";
import { getDatabase, ref, push ,remove } from "firebase/database";

// Import firebase configuration from firebase.ts file
import firebaseApp from "../firebase";

const TodoForm = () => {
  const db = getDatabase(firebaseApp);

  const [title, setTitle] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const addTodo = () => {
  const todoRef = ref(db, "/todos");
  const todo = {
    title,
    done: false,
  };
  push(todoRef, todo);

  };


  return (
    <Form className="d-flex align-items-center">
      <Form.Control onChange={handleChange} className="m-3 w-50 px-3" />
      <Button type="submit" onClick={addTodo}className="mx-3 px-4">
        Add
      </Button>
    </Form>
  )
}

export default TodoForm;