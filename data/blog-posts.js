// Mock blog post data for design_mode
const blogPosts = [
  {
    id: 1,
    title: "The Art of Sustainable Fashion",
    slug: "art-of-sustainable-fashion",
    excerpt:
      "Discover how sustainable fashion is shaping the future of the industry and why it matters for our planet.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Emma Thompson",
    authorImage: "assets/images/blog/authors/emma-thompson.jpg",
    category: "Sustainability",
    tags: ["sustainable fashion", "eco-friendly", "green living"],
    image: "assets/images/blog/sustainable-fashion.jpg",
    date: "2024-03-15",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Building a Minimalist Wardrobe",
    slug: "building-minimalist-wardrobe",
    excerpt:
      "Learn how to create a versatile and sustainable wardrobe with fewer, high-quality pieces.",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "James Wilson",
    authorImage: "assets/images/blog/authors/james-wilson.jpg",
    category: "Style Guide",
    tags: ["minimalism", "wardrobe essentials", "sustainable living"],
    image: "assets/images/blog/minimalist-wardrobe.jpg",
    date: "2024-03-10",
    readTime: "4 min read",
    featured: true,
  },
  {
    id: 3,
    title: "The History of British Fashion",
    slug: "history-british-fashion",
    excerpt:
      "Explore the rich heritage and evolution of British fashion through the centuries.",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    author: "Sarah Johnson",
    authorImage: "assets/images/blog/authors/sarah-johnson.jpg",
    category: "Fashion History",
    tags: ["british fashion", "history", "heritage"],
    image: "assets/images/blog/british-fashion.jpg",
    date: "2024-03-05",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Seasonal Style Guide: Spring 2024",
    slug: "seasonal-style-guide-spring-2024",
    excerpt:
      "Your complete guide to staying stylish this spring with the latest trends and timeless classics.",
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    author: "Michael Brown",
    authorImage: "assets/images/blog/authors/michael-brown.jpg",
    category: "Style Guide",
    tags: ["spring fashion", "trends", "seasonal style"],
    image: "assets/images/blog/spring-style.jpg",
    date: "2024-03-01",
    readTime: "7 min read",
    featured: true,
  },
  {
    id: 5,
    title: "The Future of Fashion Technology",
    slug: "future-fashion-technology",
    excerpt:
      "How technology is revolutionizing the fashion industry, from smart fabrics to virtual fitting rooms.",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    author: "Emily Davis",
    authorImage: "assets/images/blog/authors/emily-davis.jpg",
    category: "Technology",
    tags: ["fashion tech", "innovation", "future trends"],
    image: "assets/images/blog/fashion-tech.jpg",
    date: "2024-02-25",
    readTime: "5 min read",
    featured: false,
  },
];

// Export the blog posts data
if (typeof module !== "undefined" && module.exports) {
  module.exports = blogPosts;
}
