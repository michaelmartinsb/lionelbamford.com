// Mock product data for design_mode
const products = [
  {
    id: 1,
    name: "Linen Blend Shirt",
    price: 89.99,
    category: "Shirts",
    description:
      "A lightweight linen blend shirt perfect for summer days. Features a relaxed fit and breathable fabric.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue", "Black"],
    images: [
      "assets/images/products/linen-blend-shirt.jpg",
      "assets/images/products/linen-blend-shirt-2.jpg",
      "assets/images/products/linen-blend-shirt-3.jpg",
    ],
    featured: true,
    new: true,
    inStock: true,
  },
  {
    id: 2,
    name: "Relaxed Chinos",
    price: 75.0,
    category: "Pants",
    description:
      "Comfortable chinos with a relaxed fit. Made from high-quality cotton with a slight stretch for comfort.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Khaki", "Navy", "Olive"],
    images: [
      "assets/images/products/relaxed-chinos.jpg",
      "assets/images/products/relaxed-chinos-2.jpg",
      "assets/images/products/relaxed-chinos-3.jpg",
    ],
    featured: true,
    new: false,
    inStock: true,
  },
  {
    id: 3,
    name: "Summer Jacket",
    price: 120.0,
    category: "Outerwear",
    description:
      "A lightweight summer jacket perfect for those cooler summer evenings. Features a water-resistant outer layer.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Navy", "Black"],
    images: [
      "assets/images/products/summer-jacket.jpg",
      "assets/images/products/summer-jacket-2.jpg",
      "assets/images/products/summer-jacket-3.jpg",
    ],
    featured: true,
    new: true,
    inStock: true,
  },
  {
    id: 4,
    name: "Classic T-Shirt",
    price: 35.0,
    category: "Shirts",
    description:
      "A classic t-shirt made from 100% organic cotton. Features a comfortable fit and durable construction.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Gray", "Navy"],
    images: [
      "assets/images/products/classic-tshirt.jpg",
      "assets/images/products/classic-tshirt-2.jpg",
      "assets/images/products/classic-tshirt-3.jpg",
    ],
    featured: false,
    new: false,
    inStock: true,
  },
  {
    id: 5,
    name: "Slim Fit Jeans",
    price: 85.0,
    category: "Pants",
    description:
      "Slim fit jeans made from premium denim. Features a modern cut and comfortable stretch.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black", "Gray"],
    images: [
      "assets/images/products/slim-fit-jeans.jpg",
      "assets/images/products/slim-fit-jeans-2.jpg",
      "assets/images/products/slim-fit-jeans-3.jpg",
    ],
    featured: false,
    new: false,
    inStock: true,
  },
  {
    id: 6,
    name: "Casual Blazer",
    price: 150.0,
    category: "Outerwear",
    description:
      "A versatile casual blazer that can be dressed up or down. Made from a lightweight wool blend.",
    sizes: ["S", "M", "L"],
    colors: ["Navy", "Gray", "Black"],
    images: [
      "assets/images/products/casual-blazer.jpg",
      "assets/images/products/casual-blazer-2.jpg",
      "assets/images/products/casual-blazer-3.jpg",
    ],
    featured: true,
    new: true,
    inStock: true,
  },
  {
    id: 7,
    name: "Polo Shirt",
    price: 45.0,
    category: "Shirts",
    description:
      "A classic polo shirt made from pique cotton. Features a comfortable fit and timeless style.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Navy", "Black", "Red"],
    images: [
      "assets/images/products/polo-shirt.jpg",
      "assets/images/products/polo-shirt-2.jpg",
      "assets/images/products/polo-shirt-3.jpg",
    ],
    featured: false,
    new: false,
    inStock: true,
  },
  {
    id: 8,
    name: "Cargo Shorts",
    price: 65.0,
    category: "Pants",
    description:
      "Comfortable cargo shorts with multiple pockets. Made from durable cotton with a water-resistant finish.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Khaki", "Olive", "Navy"],
    images: [
      "assets/images/products/cargo-shorts.jpg",
      "assets/images/products/cargo-shorts-2.jpg",
      "assets/images/products/cargo-shorts-3.jpg",
    ],
    featured: false,
    new: true,
    inStock: true,
  },
];

// Export the products data
if (typeof module !== "undefined" && module.exports) {
  module.exports = products;
}
