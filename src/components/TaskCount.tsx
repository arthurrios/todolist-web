import styles from './TaskCount.module.css'

interface TaskProps {
  type: 'created' | 'done'
  count: string | number
}

export function TaskCount({ type, count }: TaskProps) {
  return (
    <div className={styles.container}>
      <div
        className={
          type === 'created' ? styles.textTasksCreated : styles.textTasksDone
        }
      >
        {type === 'created' ? 'Tasks created' : 'Done'}
      </div>
      <div className={styles.countContainer}>{count}</div>
    </div>
  )
}
