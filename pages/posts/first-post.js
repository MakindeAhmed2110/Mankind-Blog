import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import styles from '../../components/layout.module.css';
import Newsletter from '../../reusable/newsletter';
import Navbar from './navbar';


import { FaCalendarDay, FaCheckCircle, FaCheckDouble } from 'react-icons/fa'
import Footer from '../../reusable/footer';


export default function FirstPost() {
  return (
    <>
      <Head>
        <title>Impact of technology on the way we interact this 21st century. </title>
      </Head>
     
       <Navbar />

           <div className={styles.body_cover}>


           <button className={styles.buttonway}><a href='/'><span>&rarr; </span>Back to home</a></button>
   
             
            <section className={styles.heading}>
                  <h1 className={styles.header}>Technonlogy has changed the way we interact in this 21st Century where things and objects are powered 2023.</h1>
                 <div className={styles.editors}>
                     <div className={styles.date}>
                     <FaCalendarDay />
                     <span>21-03-2022</span>
                     </div>
                     <div className={styles.author}>
                        <span>Makinde Ahmed</span>
                        <img src='/asset/Twitter-verified.svg' />
                     
                     </div>
                    
                 </div>



               <Newsletter />
                        
             </section>
             
             

           <div className={styles.latest}>
                    <div className={styles.trending}>
                        <h1>Trending</h1>
                        <div className={styles.contain1} data-aos='fade-right' data-aos-duration='3000'>
                            <img src='/asset/3d-vr.jpg' />
                            <span>
                                <h4>Bringing new features into..</h4>
                                <h6>22-03-2022</h6>
                            </span>
                        </div>
                        <div className={styles.contain2}>
                            <img src='/asset/web.jpg' />
                            <span>
                                <h4>Checkout best web design principles..</h4>
                                <h6>22-03-2022</h6>
                            </span>
                        </div>
                    </div>

                    <div className={styles.editor}>
                        <h1>Editor's Pick</h1>
                        <img src='/asset/facebook.jpg' data-aos='fade-up' data-aos-duration='2000'/>
                    </div>

                    <div className={styles.type}>
                        
                        <span className={styles.buttons}>
                            <button className={styles.button1} id='active'>Latest</button>
                            <button className={styles.button2}>Popular</button>
                        </span>
                        <div className={styles.contain1} data-aos='fade-up' data-aos-duration='2000'>
                            <img src='/asset/laptop.jpg' />
                            <span>
                                <h4>Cost of computer devices shoot up..</h4>
                                <h6>22-03-2022</h6>
                            </span>
                        </div>
                        <div className={styles.contain2} data-aos='fade-up' data-aos-duration='2000'>
                            <img src='/asset/web.jpg' />
                            <span>
                                <h4>Checkout best web design principles..</h4>
                                <h6>22-03-2022</h6>
                            </span>
                        </div>
                    </div>
                </div>





          </div>
                          
          <Footer /> 
         
         
         
         
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
  );
}
