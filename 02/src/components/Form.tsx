import { PlusCircleIcon } from "@phosphor-icons/react";
import styles from "./Form.module.css";
import { useState } from "react";

type FormProps = {
  onAddTask: (name: string) => void;
}

export function Form({ onAddTask }: FormProps) {
  const [taskName, setTaskName] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    !taskName && alert("Por favor, insira o nome da tarefa.");

    onAddTask(taskName);

    setTaskName("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.taskForm}>
      <div className={styles.inputWrapper}>
        <input 
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit" disabled={!taskName}>
          <span>Criar</span>
          <PlusCircleIcon size={20} />
        </button>
      </div>
    </form>
  );
}
