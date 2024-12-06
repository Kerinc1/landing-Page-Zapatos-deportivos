"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/products.module.css";

const Products: React.FC = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Nike Air Max",
      availableQuantity: 20,
      sizes: [38, 39, 40],
      price: 120000, // Precio en COP
      image: "nike-air.jpeg",
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      availableQuantity: 15,
      sizes: [38, 39, 40],
      price: 150000, // Precio en COP
      discount: 3, // Descuento en porcentaje
      image: "adidas-ultraboost.jpeg",
    },
    {
      id: 3,
      name: "Puma RS-X",
      availableQuantity: 10,
      sizes: [38, 39, 40],
      price: 110000, // Precio en COP
      image: "puma-rs.jpeg",
    },
    {
      id: 4,
      name: "Reebok Classic",
      availableQuantity: 8,
      sizes: [38, 39, 40],
      price: 90000, // Precio en COP
      image: "reebok-classic.jpeg",
    },
    {
      id: 5,
      name: "New Balance 574",
      availableQuantity: 12,
      sizes: [38, 39, 40],
      price: 100000, // Precio en COP
      image: "new-balance.jpeg",
    },
  ]);

  const handleSizeChange = (e, productId) => {
    console.log(`Talla seleccionada para el producto ${productId}: ${e.target.value}`);
  };

  return (
    <div>
      <h1 className={styles.titleProducts} id="products">PRODUCTOS</h1>
      <div className={styles.productsContainer}>
        {products.map((product) => {
          const discountedPrice =
            product.discount
              ? product.price * (1 - product.discount / 100)
              : product.price;

          return (
            <div key={product.id} className={styles.productCard}>
              <Image
                src={`/assets/img/${product.image}`}
                alt={product.name}
                width={200}
                height={200}
                className={styles.productImage}
              />
              <h3 className={styles.bold}>{product.name}</h3>
              <p className={styles.light}>Disponible: {product.availableQuantity}</p>
              {product.discount ? (
                <>
                  <p className={styles.light}>
                    <span style={{ textDecoration: "line-through", color: "red" }}>
                      ${product.price.toLocaleString("es-CO")}
                    </span>
                    {" "}
                    <span>Ahora: ${Number(discountedPrice.toFixed(0)).toLocaleString("es-CO")}</span>
                    </p>
                </>
              ) : (
                <p className={styles.light}>
                  Precio: ${product.price.toLocaleString("es-CO")}
                </p>
              )}
              <label
                htmlFor={`size-select-${product.id}`}
                className={styles.sizeLabel}
              >
                Talla:
              </label>
              <select
                id={`size-select-${product.id}`}
                className={styles.sizeSelect}
                onChange={(e) => handleSizeChange(e, product.id)}
              >
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              <button className={styles.buyButton}>Comprar</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
