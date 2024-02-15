import styles from './App.module.css'
import { Button, IconNodeProps } from './components/Button'

import { Header } from './components/Header'
import { Input } from './components/Input'
import { PlusCircle } from '@phosphor-icons/react'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.inputWrapper}>
        <Input placeholder="Add new task" />
        <Button title="Create" icon={PlusCircle as IconNodeProps} />
      </div>
    </div>
  )
}
