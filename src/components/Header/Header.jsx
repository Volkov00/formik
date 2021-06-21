import style from './Header.module.sass';
import cx from 'classnames';
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';


function Header() {
    return (
        <header className={style.container}>
            <div className={style.wrapper}>
                <div>
                    <Link to='/'><img src="https://www.squadhelp.com/img/logo.png" alt="LoGo" /></Link>
                </div>
                <div>
                    <Link to='/login'><button className={style.loginBtn}>SingUp</button></Link>
                </div>
            </div>
        </header>
    )
}
export default Header;