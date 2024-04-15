import Link from 'next/link'
import styles from './BarraDePesquisa.module.css'
import { MdSearch } from 'react-icons/md'

export default function BarraDePesquisa() {
    return (
        <div className={styles.barra_de_pesquisa}>
            <input placeholder='Digite o que você procura'/>
            <Link href={'/'} className={styles.div_icone_pesquisa}>
                <MdSearch />
            </Link >
        </div>
    )
}