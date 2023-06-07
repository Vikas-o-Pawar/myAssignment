import { React } from 'react'
import NavItems from './NavItems'
import classes from './Navbar.module.css'

export default function Navbar(props) {

    return (
        <section className={classes.mainNavSection}>

            <span className={classes.mainNavSpan}>Assignment</span>

            <div className={classes.navItemSection}>
                <ul className={classes.navItemsList}>
                    <NavItems itemName={'Shows'}  />
                </ul>
            </div>

        </section>
    )
}
