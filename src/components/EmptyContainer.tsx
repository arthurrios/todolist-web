import styles from './EmptyContainer.module.css'
import Clipboard from '../assets/clipboard.svg'

export function EmptyContainer() {
  return (
    <div className={styles.container}>
      <img src={Clipboard} alt="Clipboard Vector" />
      <p>You have no tasks registered</p>
      <span>Create tasks and order your to-do items</span>
    </div>
  )
}
