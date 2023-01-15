import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import adam from "../assets/images/adamlevine.jpg";
import dualipa from "../assets/images/dualipa.webp";
import geazy from "../assets/images/g-eazy.webp";
import katyperry from "../assets/images/KATY-2.webp";
import weeknd from "../assets/images/weeknd.jpg";
import halsey from "../assets/images/halsey.webp";
import stepan from "../assets/images/stepan.jpg";
import melania from "../assets/images/melania.jpg";
import megan from "../assets/images/megan.jpg";
import Script from "next/script";
import simpleLightbox from "simplelightbox";

export default function Home() {
  return (
    <>
      <Head>
        <title>PopTV Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/nanotechnology.png" />
      </Head>
      <nav className={styles.navbar}>
        <Link href="/">
          <h1 className={styles.logo}>
            <span className={styles.pop}>Pop</span>
            <span className={styles.tv}>TV</span>
            <span className={styles.fist}>&#x1f3a4;</span>
          </h1>
        </Link>
        <ul className={styles.navline}>
          <li className={styles.navItem}>
            <Link href="#about" className={styles.navLink} id="nav-link">
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#stars" className={styles.navLink} id="nav-link">
              Pop Stars
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#stakeholders" className={styles.navLink} id="nav-link">
              stakeholders
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#sub" className={styles.navLink} id="nav-link">
              Subscribe
            </Link>
          </li>
        </ul>
        <div className={styles.hamburger} id="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
      <main>
        <section className={styles.hero}>
          <div className="intro-text">
            <h1>
              <span className="hear">You can hear the notes</span>
              <br />
              <span className="connecting">Connecting</span>
            </h1>
            <p>
              An online streaming platform for boxing matches <br />
              We also dedicate some special time to throwbacks cuz old is gold
            </p>
            <Link href="/" className="btn red">
              Learn More
            </Link>
            <Link href="/" className="btn blue">
              Subscribe
            </Link>
          </div>
          <div className="i-frame">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/F4owNCqJCIc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="stand-1"></div>
            <div className="stand-2"></div>
          </div>
        </section>
        <section className="about" id="about">
          <h3>Watch the Stars</h3>
          <p>
            Our primary objective is to bring live boxing matches to fans all
            around the world
          </p>

          <h3>Its not about Sing Alone!</h3>
          <p>
            We also air documentaries specially made for the greats, lifestyle
            of boxers, news, and more.
          </p>
        </section>
        <section className="stars" id="stars">
          <div className="stars-gallery">
            <a href="src/assets/images/adamlevine.jpg" className="big">
              <Image src={adam} alt="Adam Levine" title="AL" />
            </a>
            <a href="images/dualipa.webp" className="big">
              <Image src={dualipa} alt="Dua Lipa" title="DL" />
            </a>
            <a href="../assets/images/dualipa.webp" className="big">
              <Image src={geazy} alt="G-Eazy" title="GE" />
            </a>
            <a href="../assets/images/dualipa.webp" className="big">
              <Image src={katyperry} alt="Katy Perry" title="KP" />
            </a>
            <a href="../assets/images/dualipa.webp" className="big">
              <Image src={weeknd} alt="The Weeknd" title="TW" />
            </a>
            <a href="../assets/images/dualipa.webp" className="big">
              <Image src={halsey} alt="Halsey" title="Halsey" />
            </a>
          </div>
          Type here somethin
        </section>
        <section className="people" id="stakeholders">
          <div className="stakeholders">
            <div className="persons">
              <div className="person-1">
                <Image src={stepan} alt="Stepan Rudenko" className="img" />
                <p className="name">Stepan Rudenko</p>
                <p className="role">Founder</p>
              </div>
              <div className="person-2">
                <Image src={melania} alt="Melania Fox" className="img" />
                <p className="name">Melania Fox</p>
                <p className="role">Co-Founder</p>
              </div>
              <div className="person-2">
                <Image src={megan} alt="Megan Gray" className="img" />
                <p className="name">Megan Gray</p>
                <p className="role">Head Analyst</p>
              </div>
            </div>
          </div>
        </section>
        <section className="sub" id="sub">
          <h3>Subscribe for my future updates</h3>
          <form action="#">
            <input
              type="email"
              name="email"
              id="email-sub"
              className="email-sub"
              required
            />
            <input
              type="submit"
              value="Subscribe"
              id="submit-btn"
              className="submit-btn"
            />
          </form>
        </section>
        <section className="social">
          <h3>Connect with me on Social Media</h3>
          <div className="socicons">
            <Link href="https://www.linkedin.com/in/stepan-rudenko-ab7a9b222/">
              <ion-icon name="logo-linkedin"></ion-icon>
            </Link>
            <Link href="https://www.instagram.com/stephanrudenko/">
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>
            <Link href="https://www.facebook.com/stefRuDen/">
              <ion-icon name="logo-facebook"></ion-icon>
            </Link>
          </div>
        </section>
        <i
          className="scroll-up"
          id="scroll-up"
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
        >
          <ion-icon
            name="arrow-up-circle-outline"
            className="socicon up-arrow"
            alt="up-arrow"
          ></ion-icon>
        </i>
        <Script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        />
      </main>
      <footer>&copy;2023. All Rights Reserved</footer>
    </>
  );
}
