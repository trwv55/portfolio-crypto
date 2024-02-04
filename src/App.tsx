import styles from './App.module.scss'
import Header from './components/Header'

function App() {

  return (
    <div className={styles.parent}>
      <Header />
      <h1 className={styles.title}>Hello World!</h1>
    </div>
  )
}

export default App
