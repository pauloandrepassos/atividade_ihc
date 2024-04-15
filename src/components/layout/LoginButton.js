import style from './LoginButton.module.css'
import { FaUser } from 'react-icons/fa'

export default function LoginButton() {
    return (
        <button className={style.login_button}>
            <FaUser className={style.FaUser}/>
            Login
        </button>
    )
}