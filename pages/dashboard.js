import Styles from '../styles/dashboard.module.css'
import Link from 'next/link'

export default function Dashboard(){ 
    return(
    <div>
        
        <Link href="/">
          <a className={ Styles.nav_button }>Home</a>
        </Link>
        <div><br />This is the dasboard</div> 
     
    </div> 
    )
}