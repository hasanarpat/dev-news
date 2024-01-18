'use server';
import Image from 'next/image';
import React from 'react';
import styles from './author.module.css';

const getData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) return new Error('Something went wrong');

  return await res.json();
};

const Author = async ({ id }) => {
  const author = await getData(id);

  return (
    <div className={styles.author}>
      <Image
        alt=""
        src="https://images.pexels.com/photos/13798633/pexels-photo-13798633.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        width={64}
        height={64}
        objectFit="cover"
        className={styles.img}
      />
      <span>{author.name}</span>
    </div>
  );
};

export default Author;
