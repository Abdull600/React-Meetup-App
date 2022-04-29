import { useContext } from "react";

import { Link } from "react-router-dom";
import classes from './HeaderStyle.module.css';
import FavoritesContext from "../store/favorites-context";

function MainNavigationPage() {
    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>Meet<span>App</span></div>
            
            <nav>
                <ul className={classes.nav_ul}>
                    <li className={classes.li}><Link className={classes.link} to="/">All Meetups</Link></li>
                    <li className={classes.li}><Link className={classes.link} to="/new-meetup"> Add New Meetup</Link></li>
                    <li className={classes.li}><Link className={classes.link} to="/favorites"> Favorites <span className={classes.badge}>{favoritesCtx.totalFavorites}</span> </Link></li>
                </ul>
            </nav>
        </header>
    )
}


export default MainNavigationPage;