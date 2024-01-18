import Link from 'next/link';
import styles from './navbar.module.css';
import { FaCrow } from 'react-icons/fa';

const links = [
  {
    id: 0,
    title: 'Blog',
    path: '/blog',
  },
  {
    id: 1,
    title: 'News',
    path: '/news',
  },
  {
    id: 2,
    title: 'Pricing',
    path: '/pricing',
  },
  {
    id: 3,
    title: 'Contact',
    path: '/contact',
  },
  {
    id: 4,
    title: 'About',
    path: '/about',
  },
];

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link
        className={styles.logo}
        href="/"
      >
        Crow <FaCrow />
      </Link>
      <div className={styles.linkContainer}>
        <ul className={styles.links}>
          {links.map((link) => (
            <li
              key={link.id}
              className={styles.linkItem}
            >
              <Link
                href={link.path}
                className={styles.link}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.signOptions}>
        <button className={styles.signButton}>
          <Link
            className={styles.signLink}
            href="/auth"
          >
            Sign in
          </Link>
        </button>
        <button className={styles.signButton}>
          <Link
            className={styles.signLink}
            href="/auth"
          >
            Sign up
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
