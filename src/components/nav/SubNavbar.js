import styles from './SubNavbar.module.css'
import { MdMenu, MdKeyboardArrowDown } from 'react-icons/md';
import Link from 'next/link'

export default function SubNavbar() {
    const categorias = ['Instrumentos', 'Acessórios', 'Esquipamentos de Áudio e Gravação', 'Equipamentos de Palco e Iluminação', 'Livros e Materiais de Educação Musical']
    return (
        <nav className={styles.sub_navbar}>
            <div className={styles.container}>
                <div className={styles.menu_categorias}>

                    <p><MdMenu className={styles.icon} />CATEGORIAS<MdKeyboardArrowDown className={styles.icon} /></p>
                    <div className={styles.submenu}>
                        {categorias.map((categoria, index) => (
                            <Link className={styles.itens_submenu} key={index} href={`/categoria/${categoria}`}>
                                {categoria}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

/*<li className="categorias">
          <a>Categorias</a>
          <ul className="submenu">
            {categorias.map((categoria, index) => (
              <li key={index}>
                <Link href={`/categorias/${categoria.toLowerCase()}`}>
                  <a>{categoria}</a>
                </Link>
              </li>
            ))}
          </ul>
        </li>
        
        .submenu {
          display: none;
          position: absolute;
          background-color: #444;
          padding: 10px;
          border-radius: 5px;
        }

        .categorias:hover .submenu {
          display: block;
        }*/