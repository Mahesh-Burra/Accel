'use client';
import {useState} from 'react';
import Link from "next/link";
import Styles from './navbar.module.css'

const Navbar = () => {
  const [showLinks ,setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  
  return (
    <nav className={Styles.navbar}>
        <div className={Styles.content}><h1 className={Styles.head}>Accelotics</h1>
          <p className={Styles.para}>Technologies</p>
        </div>
        <div className={Styles.menuIcon} onClick={toggleLinks}>
          <div className={Styles.bar}></div>
          <div className={Styles.bar}></div>
          <div className={Styles.bar}></div>
        </div>
        <ul className={`${Styles.links} ${showLinks ? Styles.showLinks : ''}`}>
          <li className={Styles.one}><Link href="/home">Home</Link></li>
          <li className={Styles.two}><Link href="/product">Product Engineering</Link></li>
          <li className={Styles.three}><Link href="/about-us">About Us</Link></li>
        </ul>
        
      </nav>
  )
}

export default Navbar