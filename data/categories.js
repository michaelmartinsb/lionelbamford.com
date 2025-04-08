// Mock category data for design_mode
const categories = [
  {
    id: 1,
    name: "Shirts",
    description: "A collection of shirts for every occasion",
    image: "assets/images/categories/shirts.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Pants",
    description: "Comfortable and stylish pants for any day",
    image: "assets/images/categories/pants.jpg",
    featured: true,
  },
  {
    id: 3,
    name: "Outerwear",
    description: "Jackets and coats for all seasons",
    image: "assets/images/categories/outerwear.jpg",
    featured: true,
  },
  {
    id: 4,
    name: "Accessories",
    description: "Complete your look with our accessories",
    image: "assets/images/categories/accessories.jpg",
    featured: false,
  },
  {
    id: 5,
    name: "Footwear",
    description: "Stylish shoes for every occasion",
    image: "assets/images/categories/footwear.jpg",
    featured: false,
  },
];

// Export the categories data
if (typeof module !== "undefined" && module.exports) {
  module.exports = categories;
}
