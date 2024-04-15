import styles from './ProductsSection.module.css'
import Image from 'next/image'
import violino from '/public/images/violino1.png'
import Link from 'next/link'

export default function CardProduto({produto}) {
    return (
        <Link href={'/'} className={styles.card_produto}>
            <div className={styles.imagem}>
                <Image src={produto.imagem} width={200} height={200}/>
            </div>
            <div className={styles.descricao}>
                <p>{produto.descricao}</p>
            </div>
            <div className={styles.preco}>
                <p>R$ {produto.preco.toFixed(2)}</p>
            </div>
        </Link>
    )
}