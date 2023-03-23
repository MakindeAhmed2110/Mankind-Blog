import Head from 'next/head';
import Link from 'next/link';


export default function SignUp() {


    return(
        <>
          <Head>
            <title>SignUp</title>
          </Head>

          <form  action='/api/form' method='post'>
            <label htmlFor='first'>First Name:</label>
            <input type='text' id='first' name='first'></input>
            <label htmlFor='last'>Last Name:</label>
            <input type='text' id='last' name='last'></input>
             <button type='submit'>Submit</button>
          </form>

          <h1>
            <Link href='./login'>Login Instead ?</Link>
          </h1>
        </>
    )
}