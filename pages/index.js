import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from './/../components/Counter.js';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
          Jacob Metz welcomes <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Counter />

        <p>
          <a href="https://github.com/JacobMetz/NextJS-331" target="_blank" rel="noopener noreferrer">
          NextJS-331 Repository
          </a>
          <br />
          I am interested in learning HTMX because I took a class from Carson Gross and I have heard ThePrimeAgen talk about it online.
        </p>

    </div>
  );
}
