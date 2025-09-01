import { useState } from "react";

import "./App.module.css";

import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { TaskList } from "./components/TaskList";

export type TaskType = {
  id: string;
  name: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function handleAddTask(name: string) {
    const taskAlreadyExists = tasks.find((task) => task.name === name);
    if (taskAlreadyExists) {
      alert("Tarefa já existe!");
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      name,
      isCompleted: false
    };

    setTasks([...tasks, newTask]);
  }

  function handleToggleTask(id: string, checked: boolean) {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === id ? { ...task, isCompleted: checked } : task
    )
  );
}

  function handleDeleteTask(id: string) {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  return (
    <>
      <Header />

      <main>
        <Form onAddTask={handleAddTask} />

        <TaskList tasks={tasks} onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask} />
      </main>
    </>
  );
}
