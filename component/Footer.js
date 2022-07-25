import Link from "next/link";
import styles from "../styles/Footer.module.css";

import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaWhatsapp, FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social_icon}>
        <a href="https://www.youtube.com/watch?v=UpkEANWC2Ms&t=354s" target="_blank"><FaInstagram className={FaInstagram} /></a>
        <a><FaTwitter className={FaTwitter} /></a>
        <a><FaLinkedin className={FaLinkedin} /></a>
        <a><FaYoutube className={FaYoutube} /></a>
        <a><FaWhatsapp className={FaWhatsapp} /></a>
        <a><FaFacebook className={FaFacebook} /></a>
      </div>
        
      <p>	&#169;2022 All rights Reserved | Silvana's Mango S.r.l | P.Iva 00000000000 | </p>
    </footer>
  );
};

export default Footer;
