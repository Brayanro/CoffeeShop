import { BiCart, BiLogIn } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import './main.css';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg'>
            <div className='container'>
                <NavLink className='navbar-brand' to='/'>
                    <img src={logo} alt='Logo' className='nav__logo-img' />
                </NavLink>
                <button className='navbar-toggler' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasNavbar' aria-controls='offcanvasNavbar'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='offcanvas offcanvas-end navbar__offcanvas' tabIndex='-1' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
                    <div className='offcanvas-header'>
                        <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
                    </div>
                    <div className='offcanvas-body text-center'>
                        <ul className='navbar-nav ms-auto'>
                            <li className='nav-item'>
                                <NavLink
                                    to='/'
                                    className={({ isActive }) => (isActive ? 'nav__link-active' : 'nav-link')}
                                >Inicio
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink
                                    to='/about'
                                    className={({ isActive }) => (isActive ? 'nav__link-active' : 'nav-link')}
                                >
                                    Acerca
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink
                                    to='/products'
                                    className={({ isActive }) => (isActive ? 'nav__link-active' : 'nav-link')}
                                >
                                    Productos
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink
                                    to='/cart'
                                    className={({ isActive }) => (isActive ? 'nav__link-active' : 'nav-link')}
                                >
                                    <BiCart className='fs-5' />
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink
                                    to='/contact'
                                    className={({ isActive }) => (isActive ? 'nav__link-active' : 'nav-link')}
                                >
                                    Contacto
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink
                                    to='/blog'
                                    className={({ isActive }) => (isActive ? 'nav__link-active' : 'nav-link')}
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li className='nav-item ps-3'>
                                <NavLink
                                    to='/login'
                                    className='btn btn__login pt-2 pb-2'
                                >
                                    Iniciar Sesión <BiLogIn className='fs-5' />
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;