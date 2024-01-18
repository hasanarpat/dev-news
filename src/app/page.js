import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import PostSlider from '@/components/post/postSlider/PostSlider';

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <Image
            fill
            className={styles.img}
            alt="hero image includes crow"
            src="https://images.unsplash.com/photo-1610961388965-129b15e46a2c?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className={styles.heroDesc}>
            <h1 className={styles.title}>Lorem Ipsum Amet</h1>
            <p className={styles.desc}>
              Exercitation nulla qui elit incididunt tempor ex pariatur amet
              enim. Magna excepteur proident nulla sunt. Quis sunt magna ex
              ipsum quis veniam exercitation consectetur laboris minim ut cillum
              excepteur. Amet sunt ut excepteur eiusmod. Sit labore velit sint
              enim anim excepteur. Sit sit culpa incididunt labore aute.
            </p>
            <Link
              className={styles.readMore}
              href="/"
            >
              See More
            </Link>
          </div>
        </section>

        <section className={styles.sideBar}>
          <h1>News And Suggestions</h1>
          <PostSlider />
        </section>
      </div>
    </main>
  );
}
