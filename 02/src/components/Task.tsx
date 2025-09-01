import { TrashIcon } from "@phosphor-icons/react";

import styles from "./Task.module.css";
import type { TaskType } from "../App";

type TaskProps = {
  task: TaskType;
  onToggleTask: (id: string, checked: boolean) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({task, onDeleteTask, onToggleTask}: TaskProps) {
  return (
    <div className={styles.task}>
      <input 
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onToggleTask(task.id, !task.isCompleted)}
      />
      <p>{task.name}</p>
      <button onClick={() => onDeleteTask(task.id)}>
        <TrashIcon size={24} />
      </button>
    </div>
  )
}