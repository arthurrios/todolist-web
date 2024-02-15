import styles from './Button.module.css'
import { ButtonHTMLAttributes } from 'react'
import { IconProps } from '@phosphor-icons/react'

export type IconNodeProps = (props: IconProps) => JSX.Element

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  icon?: IconNodeProps
}

export function Button({ title, icon: Icon, ...props }: ButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {title}
      {Icon && <Icon size={16} />}
    </button>
  )
}
