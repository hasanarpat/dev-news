import Link from 'next/link';
import styles from './post.module.css';
import Image from 'next/image';
import Author from '@/components/author/Author';

const Post = ({ post }) => {
  return (
    <div className={styles.post}>
      <h2 className={styles.postTitle}>{post.title}</h2>
      <p className={styles.postBody}>
        {post.body}
        <Link
          href={`/blog/${post.id}`}
          className={styles.postLink}
        >
          {' '}
          Read More...
        </Link>
      </p>
      <Author id={post.userId} />
    </div>
  );
};

export default Post;
