import React from 'react';
import '../Style/BestSell.css'; // Importing CSS file for styling

const BestSell = () => {
  const products = [
    {
      src: "/Images/banner/logo1.jpg",
      name: "Ceiling Fan with Modern Design",
      price: "$100", // Giá sản phẩm
      description: "Ceiling fan with modern design.",
    },
    {
      src: "/Images/banner/logo17.jpg",
      name: "Elegant Wall-Mounted Fan",
      price: "$120", // Giá sản phẩm
      description: "Elegant wall-mounted fan.",
    },
    {
      src: "/Images/banner/logo23.jpg",
      name: "Stylish Table Fan",
      price: "$80", // Giá sản phẩm
      description: "Stylish table fan for home use.",
    },
    {
      src: "/Images/banner/logo38.jpg",
      name: "Energy-Efficient Ceiling Fan",
      price: "$150", // Giá sản phẩm
      description: "Energy-efficient ceiling fan.",
    },
    {
      src: "/Images/banner/pe10.jpg",
      name: "Decorative Fan with Light",
      price: "$90", // Giá sản phẩm
      description: "Decorative fan with light.",
    },
    {
      src: "/Images/banner/logo10.jpg",
      name: "Compact Portable Fan",
      price: "$50", // Giá sản phẩm
      description: "Compact and powerful portable fan.",
    }
  ];

  return (
    <div className="best-sell">
      <h2>Best Sellers</h2>
      <div className="image-gallery">
        {products.map((product, index) => (
          <div key={index} className="image-item">
            <img src={product.src} alt={`Best Seller ${index + 1}`} className="img-fluid" />
            <div className="overlay">Best Seller</div> {/* Thay đổi chữ thành "Best Seller" */}
            <p className="product-name">{product.name}</p> {/* Hiển thị tên sản phẩm */}
            <p className="product-price">{product.price}</p> {/* Hiển thị giá sản phẩm */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSell;
