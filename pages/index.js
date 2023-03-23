import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Script from 'next/script';
import './hamburger';
import Newsletter from '../reusable/newsletter';
import Footer from '../reusable/footer';


export default function MyPortfolio() {
    return(
        <>
          <Head>
            <title>Mankind Tech</title>
            
          </Head>
          
 
         <div className={styles.container}>
            <header className={styles.navbar}>
                <h1 className={styles.logo}>Mankind<span>.</span></h1> 
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
              
                <button type='signin' className={styles.button}><a href='/users/signup'>Sign Up</a></button>
                </nav>
            </header>

            <div className={styles.maintitle}>
                <h1 className={styles.title}>Get Updated With<br /> Modern Tech News and<br /> happenings.</h1>
                <p>Mankind News provides the best articles and content when it comes 
                    to latest tech news.
                </p>
                <button className={styles.start} data-aos='fade-right' data-aos-duration='3000'>Start Reading &rarr;</button>
            </div>

            <div className={styles.technology} >
                <img src='/asset/Flat.png' data-aos='fade-right' data-aos-duration='3000'/>

                <span>
                    <h2 className={styles.way}>Technonlogy has 
                    changed the way we interact in this 21st Century where
                    things and objects are powered ....</h2>
                    <h5>22-02-2022</h5>
                    <p><Link href='/posts/first-post'>Continue Reading </Link></p>
                </span>
            </div>

            <div className={styles.technologytwo}>
               
                <span>
                    <h2 className={styles.way} data-aos='fade-right'>ChatGPT about to take this set of
                    people's job, and make them jobless lol ....</h2>
                    <h5>30-02-2022</h5>
                    <p>Continue Reading </p>
                </span>

                <img src='/asset/im-708695'  />
            </div>

            <div className={styles.technology}>
                <img src='/asset/card-2.jpg' height={250} />

                <span>
                    <h2 className={styles.way}>Businesses set to bring
                    in new set of technology to enhance businesses at different areas 
                    and increase ....</h2>
                    <h5>02-03-2022</h5>
                    <p><Link href='/posts/second'>Continue Reading </Link></p>
                </span>
            </div>


            <div className={styles.news}>
                <span className={styles.newsone}>
                    <h2>New Trends In vr 2023 as it set to take over the gaming system.<br/><p>24-03-2022</p></h2>
                    <button><h3>Continue Reading</h3><span> &rarr;</span></button>
                </span>
                <span className={styles.newstwo} data-aos='flip-down' data-aos-duration='2000'>
                    <h2>Shocked as how Robots serve food in Japan replacing staffs...<br/><p>24-03-2022</p></h2>
                    <button><h3>Continue Reading</h3><span> &rarr;</span></button>
                </span>
                <div className={styles.container2}>
                <div className={styles.newscontainer}>
                    <h2>Businesses glow in rich system of technology in....<br/><p>24-03-2022</p></h2>
                    <button><h3>Continue Reading</h3><span> &rarr;</span></button>
                </div>
                <div className={styles.newscontainer2}>
                    <h2>Jamb 2023 to use more electronic means to enhance....<br/><p>24-03-2022</p></h2>
                    <button><h3>Continue Reading</h3><span> &rarr;</span></button>
                </div>
             </div>
       </div>
                
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
                        <div className={styles.contain1} data-aos='fade-left' data-aos-duration='2000'>
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
                
                <div className={styles.footer}>
                <Newsletter />

                  <Footer />

                </div>
         

         </div>
          
         

         <style jsx>{`
            code{
                color : #0070f3;
            }
            a{
                text-decoration : none;
                color: black;
            }
            button:hover a{
              color: white;
            }
            button{
                cursor : pointer;
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
            overflow-x: hidden;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    
       
       
        </>
    )
}