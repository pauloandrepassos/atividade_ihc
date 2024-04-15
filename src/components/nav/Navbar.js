import styles from './Navbar.module.css'
import Image from 'next/image'
import logo from '/public/O_Som_da_Alma_logo.png'
import LoginButton from '../layout/LoginButton'
import BarraDePesquisa from '../layout/BarraDePesquisa'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image src={logo}/>
                </div>
                <BarraDePesquisa />
                <LoginButton />
            </div>
        </nav>
    )
}