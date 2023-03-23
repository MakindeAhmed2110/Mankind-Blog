import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import styles from '../../styles/navbar.module.css';
import { useEffect } from 'react';


export default function Navbar() {
    useEffect(() => {
        const hamburger = document.querySelector('#hamburger');
        const navMenu = document.querySelector('#nav-menu');
       const navLink = document.querySelectorAll('.nav-link')

       hamburger.addEventListener('click', mobileMenu);

     function mobileMenu(){
          hamburger.classList.toggle('active');
          navMenu.classList.toggle("active");
      }

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
    }, []);
    return(
        <>
        <header className={styles.navbar}>
        <h1 className={styles.logo}>Mankind.</h1> 
        <div className={styles.navigations} >
            <ul className='nav-menu' id='nav-menu'>
                <li>Home</li>
                <li>News</li>
                <li>About</li>
                <li>Writers</li>
            </ul>
        </div>
        <nav className={styles.nav}>
        <div className={styles.hamburger} id='hamburger'>
            <span className={styles.bar}></span>
            <span className={styles.barone}></span>
        </div>
      
        <button type='signin' className={styles.button}><Link href='/users/signup'>Sign Up</Link></button>
        </nav>
    </header>
    <style jsx>{`
       
  .hamburger.active .bar:nth-child(1){
    transform:  translateY(8px) rotate(45deg);
  }
  .hamburger.active .barone:nth-child(2){
    transform:  translateY(-8px) rotate(-45deg);
  }
    `}</style>
    <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>

</>
    )
}