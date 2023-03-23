import { FaSolarPanel } from 'react-icons/fa';
import styles from '../styles/navbar.module.css';

export default function Newsletter() {
    return(
        <div className={styles.newsletter} data-aos='fade-up' data-aos-duration='2000'>
                  <div className={styles.heading}>Suscribe to <span>my</span> newsletter</div>
                  <hr className={styles.horizontal} />
                  <div className={styles.sub_head}>Read articles from Mankind's Blog
                    directly inside your inbox.
                    Suscribe<br /> to the newsletter and don't miss out!
                  </div>
                  <form>
                    <input type='text' placeholder='Enter your email address'/>
                    <button type='submit'>SUBSCRIBE</button>
                  </form>
         </div>
    );
}