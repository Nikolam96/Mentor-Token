import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import "../../App.css";
import { useState, useEffect } from "react";
import ButtonSvg from "../ButtonSvg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_brand}>
        <div className={styles.navbar_img}>
          <img src="../../../public/Vector.png" alt="Logo" />
          <p>Mentor Token</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#696CFF"
          className={styles.hamburger_menu}
          onClick={toggleMenu}
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>

      <ul className={`${styles.navbar_nav} ${menuOpen && styles.menu_open}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? `${styles.active}` : ``;
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return isActive ? `${styles.active}` : ``;
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => {
              return isActive ? `${styles.active}` : ``;
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <ul
        className={`${styles.navbar_nav} ${menuOpen && styles.menu_open} `}
        datatype="modifier"
      >
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => {
              return isActive ? `${styles.active}` : ``;
            }}
          >
            Login
          </NavLink>
        </li>
        <li className={styles.btn}>
          <NavLink
            to="/register"
            className={({ isActive }) => {
              return isActive ? `${styles.active}` : ``;
            }}
          >
            <ButtonSvg width={24} fill={"#fff"} />
            Get Started
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
