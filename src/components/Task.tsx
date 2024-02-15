import styles from './Task.module.css'
import { Trash, Check } from '@phosphor-icons/react'

export interface TaskType {
  id: string
  isDone: boolean
  description: string
}

interface TaskProps {
  task: TaskType
  onChangeTaskStatus: (taskId: string) => void
  onDeleteTask: (taskId: string) => void
}

export function Task({ task, onChangeTaskStatus, onDeleteTask }: TaskProps) {
  function handleChangeStatus() {
    onChangeTaskStatus(task.id)
  }

  function handleDeleteTask() {
    onDeleteTask(task.id)
  }

  return (
    <div
      className={
        task.isDone ? styles.containerTaskDone : styles.containerTaskCreated
      }
    >
      <div>
        <button
          onClick={handleChangeStatus}
          className={
            task.isDone ? styles.checkedCircle : styles.uncheckedCircle
          }
        >
          {task.isDone ? <Check weight="bold" size={11} /> : null}
        </button>
        <p className={task.isDone ? styles.descriptionTaskDone : undefined}>
          {task.description}
        </p>
      </div>
      <button
        onClick={handleDeleteTask}
        className={styles.deleteButton}
        title="Delete Task"
      >
        <Trash weight="bold" size={16} />
      </button>
    </div>
  )
}
