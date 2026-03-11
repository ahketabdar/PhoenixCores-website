import { Link } from "react-router-dom";
import styles from './Hero.module.css';
import pic from './1.png';


function Hero() {
    return (
      <section className={styles.hero}>
        <img src={pic} alt="Hero Image" className={styles['hero-image']} />
        <h1>PhoenixCores</h1>
        <p>Web Developer | UX Designer</p>

        <div className={styles['hero-buttons']}>
          <button>Download Resume</button>

          <Link to="/Articles">
            <button>Articles</button>
          </Link>
        </div>
      </section>
    )
}

export default Hero;