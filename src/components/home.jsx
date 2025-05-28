import React from 'react'
import styles from './styles/home.module.css'
import Navbar from './Navbar'
const Home = () => {
  const openwide = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSc_TH2JI3rkULF94mweTiGZcxdImAdlVAC0OwlByJXqQyT25g/viewform")
  }
  
  return (
    <>
    <div className={styles.body}>
        <Navbar/>
    <div className={styles.App}>
      <p className={styles.title}>

        <p className={styles.project}>
          HorizonUX
        </p>
        <p className={styles.intro}>
          Your OneUi,Your Rules.
          This is the playground for personalized OneUI experiences - Cleaner,Bolder,yours
        </p>
        <p className={styles.disclaimer}>
          No ties to Samsung (Scamsung)! Just Pure customization.
        </p>
      </p>
        <button onClick={openwide} className={styles.join}>Become a maintainer - Join The Crew</button>
      </div>
    </div>
    </>
  )
}

export default Home
