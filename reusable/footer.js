import styles from '../styles/navbar.module.css';



export default function Footer(){
    return(
        <>
          <div className={styles.footer}>
          <hr className={styles.footer_divider} />
           <div className={styles.main_footer}>
             <div className={styles.footer_title}>
             <h1 className={styles.logo}>Mankind<span>.</span></h1> 
             <p>We provide the best tech news<br /> and happenings!</p>
             </div>
             <div className={styles.blog}>
                <h3>Blog on</h3>
                <div className={styles.list}>
                    <span>Web Development</span>
                    <span><a>App Development</a></span>
                    <span><a>Programming</a></span>
                    <span><a>Ai Integration</a></span>
                    <span><a>Cloud computing</a></span>
                </div>
             </div>
             <div className={styles.blog}>
                <h3>Companies</h3>
                <div className={styles.list}>
                    <span>Facebook</span>
                    <span><a>Goggle</a></span>
                    <span><a>Netflix</a></span>
                    <span><a>OpenAi</a></span>
                    <span><a>Amazon</a></span>
                </div>
             </div>
             <div className={styles.blog}>
                <h3>Services</h3>
                <div className={styles.list}>
                     <span>Web Development</span>
                    <span><a>Software Development</a></span>
                    <span><a>Brand design</a></span>
                    <span><a>Ui/ux design</a></span>
                    <span><a>Cloud computing</a></span>
                </div>
             </div>
             <div className={styles.blog}>
                <h3>News</h3>
                <div className={styles.list}>
                     <span>Latest Blog</span>
                    <span><a>Trending</a><button>New</button></span>
                    <span><a>Editor's Pick</a></span>
                   
                </div>
             </div>
             
          
           </div>
          </div>



          
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