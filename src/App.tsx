import styles from './App.module.css'
import { Button, IconNodeProps } from './components/Button'

import { Header } from './components/Header'
import { Input } from './components/Input'
import { PlusCircle } from '@phosphor-icons/react'
import { TaskCount } from './components/TaskCount'
import { ChangeEvent, FormEvent, useState } from 'react'
import { EmptyContainer } from './components/EmptyContainer'
import { Task, TaskType } from './components/Task'

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [newTaskDescription, setNewTaskDescription] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskDescription(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault()
    const newTask: TaskType = {
      id: crypto.randomUUID(),
      isDone: false,
      description: newTaskDescription,
    }
    setTasks([...tasks, newTask])
    setNewTaskDescription('')
  }

  function changeTaskStatus(taskToChangeId: string) {
    const tasksWithNewCommentStatus = tasks.map((task) => {
      if (task.id === taskToChangeId) {
        return {
          ...task,
          isDone: !task.isDone,
        }
      }
      return task
    })

    setTasks(tasksWithNewCommentStatus)
  }

  function deleteTask(taskToDeleteId: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDeleteId
    })
    setTasks(tasksWithoutDeletedOne)
  }

  const noTasksRegistered = tasks.length === 0
  const noDescriptionProvided = newTaskDescription.length === 0

  const tasksToDo = tasks.filter((task) => task.isDone === false)
  const tasksDone = tasks.filter((task) => task.isDone)

  return (
    <div>
      <Header />

      <form onSubmit={handleCreateNewTask} className={styles.formWrapper}>
        <Input
          placeholder="Add new task"
          onChange={handleNewTaskChange}
          value={newTaskDescription}
        />
        <Button
          type="submit"
          disabled={noDescriptionProvided}
          title="Create"
          icon={PlusCircle as IconNodeProps}
        />
      </form>

      <main>
        <div className={styles.tasksCountWrapper}>
          <TaskCount type="created" count={tasks.length} />
          <TaskCount
            type="done"
            count={
              tasks.length === 0 ? 0 : `${tasksDone.length} of ${tasks.length}`
            }
          />
        </div>

        {noTasksRegistered && <EmptyContainer />}

        <div className={styles.tasksContainer}>
          {tasksToDo.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                onChangeTaskStatus={changeTaskStatus}
                onDeleteTask={deleteTask}
              />
            )
          })}
          {tasksDone.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                onChangeTaskStatus={changeTaskStatus}
                onDeleteTask={deleteTask}
              />
            )
          })}
        </div>
      </main>
    </div>
  )
}
