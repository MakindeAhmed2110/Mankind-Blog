import Link from 'next/link';
import styles from '../../styles/signup.module.css';
import Head from 'next/head';
import { FaFacebookF, FaLinkedinIn, FaGoogle} from 'react-icons/fa'

export default function Login() {
    return(
        <>
        <Head>
            <title>Login</title>
        </Head>
        
        <div className={styles.container}>
             <section className={styles.sectionone} data-aos='fade-right' data-aos-duration='2000' data-aos-delay='500'>
                <h1 className={styles.logo}>Mankind</h1>
                <div className={styles.real}>
                    <header>Sign in to Account</header>
                    <hr className={styles.divider} />
                    <div className={styles.socialmedia}>
                        <span>
                          <FaFacebookF />
                          
                       </span>
                        <span>
                            <FaLinkedinIn />
                        </span>
                        <span>
                            <FaGoogle />
                        </span>
                    </div>
                    <span className={styles.account}>
                        or use your email account
                    </span>
                    <form className={styles.form}>
                       <label for='email' className={styles.custom_input}>
                         <input type='text' placeholder='Email'/> 
                         <p className={styles.custom_label}>Email</p>
                       </label>
                        <label for='password' className={styles.custom_input}>
                           <input type='password'  placeholder='Password'/>
                            <p className={styles.custom_label}>Password</p>
                        </label>
                        <div className={styles.forgotten}>
                            <span><input type='checkbox' />Remeber me</span>
                            <span className={styles.password}>Forgot Password?</span>
                        </div>
                        <button type='submit'>Sign In</button>
                    </form>
                </div>
             </section>

             <section className={styles.sectiontwo} data-aos='fade-left' data-aos-duration='2000' data-aos-delay='100'>
                <h1>Hello, Friend!</h1>
                <hr className={styles.dividertwo} />
                <p>Fill up personal information and<br /> start your journey with us.</p>
                <button>Sign Up</button>
             </section>
        </div>

        <style jsx >{`
           
.form input:focus,
.form input:not(:placeholder-shown){
    & + .custom_label{
        left: 16px;
        transform: translateY(-25px);
        font-size: 10px;
        line-height: 14px;
        background : #fff;
        border-radius: 12px;
        padding: 0 4px;
    }
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
            background :#ffffffcd;
        }
        * {
          box-sizing: border-box;
        }
        button{
            cursor: pointer;
        }
       
      `}</style>
        </>
    )
}