import Image from 'next/image';
import styles from './page.module.css';
import Author from '@/components/author/Author';

const getData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const SinglePost = async ({ params }) => {
  const { id } = params;
  const post = await getData(id);
  console.log(post);
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
        <div className={styles.authorDetails}>
          <Author id={post.userId} />
          <div className={styles.aboutPost}>
            <div>
              <p>Created At</p>
              <span>01.01.2001</span>
            </div>
            <div>
              <p>Modified At</p>
              <span>01.01.2001</span>
            </div>
            <div>
              <p>Reading Time</p>
              <span>3 Minutes</span>
            </div>
          </div>
        </div>

        <hr />
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
          adipisicing nostrud minim anim sint occaecat. Enim sint laboris veniam
          exercitation est voluptate eiusmod cillum. Tempor anim ullamco esse eu
          enim aliquip quis consequat quis sit ea nisi aliquip. Irure aliquip in
          incididunt excepteur velit excepteur cillum esse sunt sunt.
          <br />
          Enim sint laboris veniam exercitation est voluptate eiusmod cillum.
          Tempor anim ullamco esse eu enim aliquip quis consequat quis sit ea
          nisi aliquip. Irure aliquip in incididunt excepteur velit excepteur
          cillum esse sunt sunt. Id anim cillum officia quis ut velit
          adipisicing nostrud minim anim sint occaecat. Enim sint laboris veniam
          exercitation est voluptate eiusmod cillum. Tempor anim ullamco esse eu
          enim aliquip quis consequat quis sit ea nisi aliquip. Irure aliquip in
          incididunt excepteur velit excepteur cillum esse sunt sunt. Id anim
          cillum officia quis ut velit adipisicing nostrud minim anim sint
          occaecat. Aliquip occaecat excepteur qui occaecat non deserunt fugiat
          culpa magna sit. Consequat cillum esse aute culpa enim. Enim velit in
          culpa voluptate minim est. In aliquip aliqua officia adipisicing
          tempor est qui reprehenderit occaecat aliqua laborum laboris nulla.
          <br />
          Enim sint laboris veniam exercitation est voluptate eiusmod cillum.
          Tempor anim ullamco esse eu enim aliquip quis consequat quis sit ea
          nisi aliquip. Irure aliquip in incididunt excepteur velit excepteur
          cillum esse sunt sunt. Id anim cillum officia quis ut velit
          adipisicing nostrud minim anim sint occaecat.
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
        <div className={styles.buttons}>
          <button className={styles.buttons}>See Pricing</button>
          <button className={styles.buttons}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
