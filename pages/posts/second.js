import Navbar from './navbar';
import Head from 'next/head';
import styles from '../../components/layout.module.css';
import Newsletter from '../../reusable/newsletter';

export default function MySecong() {
    return(
        <>
        <Head>
            <title>Second Page</title>
        </Head>
       
        <Navbar />
        <Newsletter />
        </>
    )
}