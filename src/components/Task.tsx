import styles from './Task.module.css'
import { Trash, Check } from '@phosphor-icons/react'

export interface TaskType {
  id: string
  isDone: boolean
  description: string
}

interface TaskProps {
  task: TaskType
}

export function Task({ task }: TaskProps) {
  return (
    <div
      className={
        task.isDone ? styles.containerTaskDone : styles.containerTaskCreated
      }
    >
      <button
        className={task.isDone ? styles.checkedCircle : styles.uncheckedCircle}
      >
        <Check weight="bold" size={11} />
      </button>
      <p className={task.isDone ? styles.descriptionTaskDone : undefined}>
        {task.description}
      </p>
      <button className={styles.deleteButton} title="Delete Task">
        <Trash weight="bold" size={16} />
      </button>
    </div>
  )
}
