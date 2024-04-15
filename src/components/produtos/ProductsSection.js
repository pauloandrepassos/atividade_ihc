import styles from './ProductsSection.module.css'
import CardProduto from './CardProduto';

export default function ProductsSection({ section_name, produtos }) {
    const primeirosProdutos = produtos.slice(0, 4)
    return (
        <section className={styles.products_section}>
            <h1>{section_name}</h1>
            <div className={styles.carrossel}>
                {primeirosProdutos.map((produto, index) => (
                    <CardProduto key={index} produto={produto} teste={index}/>
                ))}
            </div>
        </section>
    )
}