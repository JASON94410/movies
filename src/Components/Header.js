import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
        <NavLink to='/'> Accueil </NavLink>
        <NavLink to='/movies'> Films </NavLink>
        <NavLink to='/Avis'> Avis </NavLink>
        </header>
    );
};

export default Header;