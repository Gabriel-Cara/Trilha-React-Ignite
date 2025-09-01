import { ClipboardTextIcon } from "@phosphor-icons/react";
import styles from "./TaskList.module.css";
import { Task } from "./Task";
import type { TaskType } from "../App";

type TaskListProps = {
  tasks: TaskType[];
  onToggleTask: (id: string, checked: boolean) => void;
  onDeleteTask: (id: string) => void;
}

export function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
  const isEmpty = tasks.length === 0;
  const completedTasksCount = tasks.filter((task) => task.isCompleted).length

  return (
    <div className={styles.taskList}>
      <header>
        <strong>
          Tarefas criadas <span>{tasks.length}</span>
        </strong>
        <strong>
          Concluídas <span>{completedTasksCount > 0 ? `${completedTasksCount} de ${tasks.length}` : 0}</span>
        </strong>
      </header>

      <div className={styles.content}>
        {isEmpty ? (
          <div className={styles.empty}>
            <ClipboardTextIcon size={56} weight="duotone" />
            <h3>Você ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <Task 
                  task={task}
                  onDeleteTask={onDeleteTask}
                  onToggleTask={onToggleTask}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
