import styles from './ConteinerCards.module.css';
import { Children } from 'react'

function ConteinerCards({children}) {
  return (
    <div className={styles.ConteinerCards}>{children}</div>
  )
}

export default ConteinerCards