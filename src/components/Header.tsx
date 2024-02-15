import styles from './Header.module.css'
import LogoSvg from '../assets/todo-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={LogoSvg} alt="Todo Logo" />
    </header>
  )
}
