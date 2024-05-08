import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Footer.module.css";
import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/logo.svg";

import youtube from "../../icons/youtube.png"
import facebook from "../../icons/facebook.png"
import instagram from "../../icons/instagram.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {

  return(
    <>
  <section className={styles.footer}>
    <div className={styles.logo}>
      <Link to={ROUTES.HOME}>
        <img src={LOGO} alt="Stuff" />
      </Link>
    </div>

    <div className={styles.rights}>
    <div className={styles.footer_copyright}>
          <p>
              {(new Date().getFullYear())} Все права защищены . 
          </p>
        </div>
    </div>


       <div className={styles.footer_copyright}>
          <p>Тел. 0779740794</p>
        </div>

    {/* <div className={styles.socials}>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <div className="icon_i">
          <img src={instagram} alt="" />
        </div>
      </a>

      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <div className="icon_i">
          <img src={facebook} alt="" />
        </div>
      </a>

      <a href="https://youtube.com" target="_blank" rel="noreferrer">
        <div className={styles.icon_i}>
          <img src={youtube} alt="" />
        </div>
      </a>
    </div> */}
  </section>
  {/* coll_footer footer-padding */}

  <section className={styles.footer}>
      <div  className={styles.footerr}>
        <div  className={styles.footer_links}>
          <div className={styles.footerlinksdiv}>
              <h4>Бизнес</h4>
              <a  href="#"> <p>Работодатель</p></a>
              <a  href="#"> <p>План здоровья</p></a>
              <a  href="#"> <p>Индивидуальный</p></a>
          </div>
          <div className={styles.footerlinksdiv}>
              <h4>Ресурсы</h4>
              <a  href="#"><p>Колл-центр</p> </a>
              <a  href="#"><p>Отзывы</p> </a>
              <a  href="#"> <p>TV</p></a>
          </div>
          <div className={styles.footerlinksdiv}>
              <h4>Партнеры</h4>
              <a  href="#"> <p>Свинг Тех</p> </a>
          </div>

          <div className={styles.footerlinksdiv}>
              <h4>Компания</h4>
              <a  href="#"><div><p>О нас</p></div></a>
              <a  href="#"><div><p>Нажимать</p></div></a>
              <a  href="#"><div><p>Карьера</p></div></a>
              <a  href="#"> <div><p>Контакт</p></div> </a>
          </div>

          <div className={styles.footerlinksdiv}>
              <h4>Мы тут</h4>
              <div className={styles.socialmedia}>
                  <a href="#">
                  <FaFacebook className={styles.socialmedial} size={30} color='#0f4b9b' />
                  </a>
                  <a href="#">
                  <FaTwitter className={styles.socialmedial} size={30} color='#0f4b9b'  style={{ marginLeft: 10 }}/>
                  </a>      
                  <a href="#">
                  <FaLinkedin className={styles.socialmedial} size={30} color='#0f4b9b'  style={{ marginLeft: 10 }}/>
                  </a>   
                  <a href="#">
                  <FaInstagram className={styles.socialmedial} size={30} color='#0f4b9b' style={{ marginLeft: 10 }} />
                  </a>   
              </div>
          </div>
        </div>
        <hr />

{/** Em  {(new Date().getFullYear())}   (Ano Capturado dinâmicamente ) */}

      <div className={styles.footer__below}>
      <div className={styles.footer__below_links}>
          <a href="#"><div><p>Условия использования</p></div></a>
          <a href="#"><div><p>Конфиденциальность</p></div></a>
          <a href="#"><div><p>безопасность</p></div></a>
          <a href="#"><div><p>Декларация о файлах</p></div></a>
      </div>
      </div>
      </div>
    </section>
  
    </>
  )
};

export default Footer;