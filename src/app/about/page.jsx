import Image from 'next/image';
import styles from './page.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          alt=""
          src="https://images.unsplash.com/photo-1678726870174-917d7e3fa84f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.desc}>
        <h1>
          Est commodo ut est id fugiat adipisicing ut cillum sit laborum veniam.
          Anim et esse minim magna id dolore adipisicing magna veniam voluptate.
        </h1>
        <p>
          Enim sint laboris veniam exercitation est voluptate eiusmod cillum.
          Tempor anim ullamco esse eu enim aliquip quis consequat quis sit ea
          nisi aliquip. Irure aliquip in incididunt excepteur velit excepteur
          cillum esse sunt sunt. Id anim cillum officia quis ut velit
          adipisicing nostrud minim anim sint occaecat. Aliquip occaecat
          excepteur qui occaecat non deserunt fugiat culpa magna sit. Consequat
          cillum esse aute culpa enim. Enim velit in culpa voluptate minim est.
          In aliquip aliqua officia adipisicing tempor est qui reprehenderit
          occaecat aliqua laborum laboris nulla.
          <br />
          Enim sint laboris veniam exercitation est voluptate eiusmod cillum.
          Tempor anim ullamco esse eu enim aliquip quis consequat quis sit ea
          nisi aliquip. Irure aliquip in incididunt excepteur velit excepteur
          cillum esse sunt sunt. Id anim cillum officia quis ut velit
          adipisicing nostrud minim anim sint occaecat.
          <br /> Aliquip occaecat excepteur qui occaecat non deserunt fugiat
          culpa magna sit. Consequat cillum esse aute culpa enim. Enim velit in
          culpa voluptate minim est. In aliquip aliqua officia adipisicing
          tempor est qui reprehenderit occaecat aliqua laborum laboris nulla.
        </p>
        <hr />
        <div className={styles.buttons}>
          <button className={styles.buttons}>See Pricing</button>
          <button className={styles.buttons}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
