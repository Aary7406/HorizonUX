import React from 'react';
import styles from './styles/devices.module.css'

const DevicesPage = () => {
  const s20click = () => {
    window.open("https://www.gsmarena.com/samsung_galaxy_s20_fe_5g-10377.php")
  }
  const a30click= () => {
    window.open("https://www.gsmarena.com/samsung_galaxy_a30-9579.php")
  }
  return (
    <div className={styles.body}>
      <div className={styles.header}>
      <h2>Supported Devices</h2>
      </div>
      <div className={styles.desc}>
      <p>The number of currently supported devices may vary in future based on the available active maintainers</p>
      </div>

      <div className={styles.cardcont}>
        <div className={styles.card}>
          <div>
            <img src="./deviceimg/A30.webp"/>
          </div>
          <div>
            <p className={styles.name}>Samsung galaxy A30</p>
          </div>
          <button onClick={a30click} className={styles.more}>Learn More</button>
        </div>

        <div className={styles.card}>
          <div>
            <img src="./deviceimg/S20FE.webp"/>
          </div>
          <div>
            <p className={styles.name}>Samsung galaxy S20FE</p>
          </div>
          <button onClick={s20click} className={styles.more}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default DevicesPage;