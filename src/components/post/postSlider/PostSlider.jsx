'use client';
import Link from 'next/link';
import styles from './postSlider.module.css';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { Suspense, useEffect, useRef, useState } from 'react';
import Post from '../post/Post';

const PostSlider = () => {
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const postList = data.slice(0, 10);
    setPosts(postList);
  };

  useEffect(() => {
    getData();
  }, []);
  const sliderRef = useRef(false);
  const handleSlide = (direction) => {
    console.log(direction);
    if (direction == 'right') {
      sliderRef.current.style.transform = `translateX(-320px)`;
    } else {
      sliderRef.current.style.transform = `translateX(320px)`;
    }
  };
  return (
    <div className={styles.container}>
      <IoIosArrowBack
        className={styles.arrow}
        onClick={() => handleSlide('left')}
      />
      <div
        className={styles.wrapper}
        ref={sliderRef}
      >
        <Suspense fallback={<div>Loading...</div>}>
          {posts.map((post) => (
            <Post
              post={post}
              key={post.id}
            />
          ))}
        </Suspense>
      </div>
      <IoIosArrowForward
        className={styles.arrow}
        onClick={() => handleSlide('right')}
      />
    </div>
  );
};

export default PostSlider;
