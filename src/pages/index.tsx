import ImgDesktop from "../assets/image-product-desktop.jpg";
import Button from "../components/Button";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.box}>
      <div className={styles.template_grid}>
        <div className={styles.template_img}>
          <img src={ImgDesktop} alt="" />
        </div>

        <div className={styles.template_text}>
          <h2>PERFUME</h2>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <h3>
            A floral, solar voluptuos interpretation composed by Olivier Polge,
            Perfum-Creator for the House of CHANEL
          </h3>

          <div className={styles.price}>
            <span className={styles.price_first}>$149.99</span>
            <span className={styles.price_second}>$169.99</span>
          </div>

          <Button />
        </div>
      </div>
    </div>
  );
}
