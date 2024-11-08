
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from '../components/Counter';
import SearchBar from '../components/SearchBar';
import { useState, useEffect } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

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
      
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading products...</p>}
      {error && <p className={styles.error}>Error: {error}</p>}
      
      <div className={styles.productsGrid}>
        {filteredProducts.map(product => (
          <div key={product.id} className={styles.productCard}>
            <img 
              src={product.image} 
              alt={product.title}
              className={styles.productImage}
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p className={styles.category}>{product.category}</p>
          </div>
        ))}
      </div>

      <p>
        <a 
          href="https://github.com/JacobMetz/NextJS-331" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          NextJS-331 Repository
        </a>
        <br />
        I am interested in learning HTMX because I took a class from Carson Gross 
        and I have heard ThePrimeAgen talk about it online.
      </p>
    </div>
  );
}