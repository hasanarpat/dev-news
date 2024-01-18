import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <span>Developed By Crow</span>
      <div className={styles.imgContainer}>
        <Image
          alt="footer image"
          src="/brands.png"
          fill
          className={styles.brands}
        />
      </div>
    </div>
  );
};

export default Footer;
