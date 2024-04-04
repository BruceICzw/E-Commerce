import React, { useState } from 'react';

const ProductForm = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState(null);

  const handleNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (productName && productImage) {
      // Create a new product object
      const newProduct = {
        name: productName,
        image: URL.createObjectURL(productImage),
      };

      // Update the products array
      setProducts([...products, newProduct]);

      // Reset form fields
      setProductName('');
      setProductImage(null);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div>
      <h1>Product Upload</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Product Name:
          <input type="text" value={productName} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Product Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit">Upload Product</button>
      </form>

      <h2>Uploaded Products:</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <strong>{product.name}</strong>
            <br />
            <img src={product.image} alt={product.name} style={{ maxWidth: '200px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductForm;
