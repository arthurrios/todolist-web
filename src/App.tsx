import styles from './App.module.css'
import { Button, IconNodeProps } from './components/Button'

import { Header } from './components/Header'
import { Input } from './components/Input'
import { PlusCircle } from '@phosphor-icons/react'
import { TaskCount } from './components/TaskCount'
import { useState } from 'react'
import { EmptyContainer } from './components/EmptyContainer'
import { Task, TaskType } from './components/Task'

const tasksArray: TaskType[] = [
  {
    id: '1',
    isDone: false,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nostrum ullam molestiae nam libero. Est voluptate molestiae sapiente eos! Ad, itaque eum consequuntur assumenda tempora illo sapiente labore porro deserunt?',
  },
  {
    id: '2',
    isDone: true,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ratione dolorum laudantium temporibus dolor excepturi veritatis repudiandae doloribus tenetur consequuntur voluptatum consectetur, aut corrupti nesciunt natus ab harum, magni aliquam.',
  },
]

export function App() {
  const [tasks, setTasks] = useState(tasksArray)
  console.log(tasks.length)

  const noTasksRegistered = tasks.length === 0

  return (
    <div>
      <Header />

      <div className={styles.inputWrapper}>
        <Input placeholder="Add new task" />
        <Button title="Create" icon={PlusCircle as IconNodeProps} />
      </div>

      <main>
        <div className={styles.tasksCountWrapper}>
          <TaskCount type="created" count={0} />
          <TaskCount type="done" count={0} />
        </div>

        {noTasksRegistered && <EmptyContainer />}

        <div className={styles.tasksContainer}>
          {tasks.map((task) => {
            return <Task key={task.id} task={task} />
          })}
        </div>
      </main>
    </div>
  )
}
