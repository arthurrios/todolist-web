import styles from './App.module.css'
import { Button, IconNodeProps } from './components/Button'

import { Header } from './components/Header'
import { Input } from './components/Input'
import { PlusCircle } from '@phosphor-icons/react'
import { TaskCount } from './components/TaskCount'
import { useState } from 'react'
import { EmptyContainer } from './components/EmptyContainer'

export function App() {
  const [tasks, setTasks] = useState([])

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

        {tasks.length === 0 && <EmptyContainer />}
      </main>
    </div>
  )
}
