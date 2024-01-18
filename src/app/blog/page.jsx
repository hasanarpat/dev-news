import Post from '@/components/post/post/Post';
import styles from './page.module.css';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Blog = async () => {
  const posts = await getData();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {posts.map((post) => (
          <div
            key={post.id}
            className={styles.post}
          >
            <Post post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
