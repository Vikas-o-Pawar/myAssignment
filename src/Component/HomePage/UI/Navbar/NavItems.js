import {React } from 'react'
import classes from './NavItems.module.css'

export default function NavItems(props) {

  return (
    <li className={classes.list}>
        <a href="/" className={classes.tag}>{props.itemName}</a>
    </li>
   
  )
}
