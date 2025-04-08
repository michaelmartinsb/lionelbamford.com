# Lionel Bamford - Fashion E-commerce Website

A modern, responsive e-commerce website for the Lionel Bamford fashion brand, built with vanilla HTML, CSS, and JavaScript.

## Project Status: Design Mode

This project is currently in **design_mode**, focusing exclusively on the front-end implementation. The goal is to create a polished, responsive, and user-friendly interface before integrating with backend services.

## Project Structure

```
lionelbamford.com/
├── index.html                # Homepage
├── README.md                 # This file
├── assets/                   # Static assets
│   ├── images/               # Image files
│   │   ├── logo/             # Brand logos
│   │   ├── products/         # Product images
│   │   ├── categories/       # Category images
│   │   ├── banners/          # Banner images
│   │   └── press/            # Press feature images
│   ├── videos/               # Video files
│   │   └── hero-video.mp4    # Hero section video
│   ├── fonts/                # Custom fonts
│   └── icons/                # Icon files
├── css/                      # Stylesheets
│   ├── main.css              # Main styles
│   ├── normalize.css         # CSS normalization
│   └── components/           # Component-specific styles
│       ├── header.css        # Header styles
│       ├── hero.css          # Hero section styles
│       ├── products.css      # Product grid styles
│       ├── categories.css    # Category section styles
│       ├── newsletter.css    # Newsletter section styles
│       └── footer.css        # Footer styles
├── js/                       # JavaScript files
│   ├── main.js               # Main JavaScript file
│   ├── animations.js         # Advanced animation effects
│   ├── cart.js               # Shopping cart functionality
│   ├── search.js             # Search functionality
│   └── newsletter.js         # Newsletter signup functionality
└── pages/                    # Additional HTML pages
    ├── shop.html             # Shop page
    ├── collections.html      # Collections page
    ├── about.html            # About page
    ├── blog.html             # Blog page
    └── product-detail.html   # Product detail page
```

## Features

### Implemented

- Responsive design for all device sizes
- Interactive product gallery
- Shopping cart functionality with local storage
- Newsletter signup with form validation
- Search functionality with debounced input
- Mobile-friendly navigation
- Smooth scrolling and animations
- Advanced visual effects and interactions:
  - Parallax scrolling sections
  - Scroll-driven animations and reveals
  - Duotone and gradient image treatments
  - Kinetic typography with split text animations
  - Magnetic elements that follow cursor movement
  - Magazine-style editorial layouts
  - Masonry image galleries
  - Shop-the-look hotspot functionality
  - Interactive product showcases with zoom effects

### In Progress

- Product filtering and sorting
- Enhanced UI/UX for product detail pages
- Improved accessibility features
- Performance optimization

### Backend Integration (Future)

- User authentication
- Full shopping cart checkout
- Product reviews and ratings
- Enhanced search functionality with backend integration
- Wishlist functionality
- Size guide and product recommendations

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/lionelbamford.com.git
   ```

2. Open the project in your code editor

3. To view the website, open `index.html` in your browser, or use a local development server.

## Browser Support

The website is compatible with:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

This project is built with vanilla HTML, CSS, and JavaScript without any external libraries or frameworks.

## Development

For local development, you can use any web server, such as:

- Live Server extension for VS Code
- Python's simple HTTP server: `python -m http.server`
- Node.js's http-server: `npx http-server`

## JavaScript Functionality

The website includes several JavaScript modules:

- **main.js**: Core functionality including animations, mobile menu, and scroll effects
- **animations.js**: Advanced animations including parallax, kinetic typography, and scroll-driven effects
- **cart.js**: Shopping cart operations with local storage persistence
- **newsletter.js**: Newsletter signup with validation and success/error messages
- **search.js**: Search functionality with debounced input and results display

## Visual Techniques

The website employs several modern visual techniques:

1. **Advanced CSS Effects**

   - CSS blend modes for duotone effects
   - CSS masking for creative text effects
   - Gradient overlays with mix-blend-mode
   - Staggered reveal animations

2. **Scroll-Driven Animations**

   - Elements that reveal, scale, or transform based on scroll position
   - Parallax backgrounds at varying speeds
   - Staggered sequence animations triggered by scrolling

3. **Editorial Design Patterns**

   - Magazine-style layouts using CSS Grid
   - Masonry galleries for visual content
   - Interactive hotspots for product showcases
   - Text animations inspired by print design

4. **Microinteractions**
   - Tactile button feedback
   - Hover lift effects
   - Pulse animations
   - Magnetic text elements that follow cursor movement

## Design Mode Focus Areas

During the design_mode phase, we are focusing on:

1. **UI/UX Refinement**

   - Improving visual consistency
   - Enhancing user interactions
   - Optimizing responsive layouts

2. **Performance Optimization**

   - Reducing page load times
   - Optimizing images and assets
   - Improving JavaScript efficiency

3. **Accessibility Improvements**

   - Ensuring WCAG compliance
   - Enhancing keyboard navigation
   - Improving screen reader compatibility

4. **Cross-browser Compatibility**
   - Testing on multiple browsers
   - Fixing browser-specific issues
   - Ensuring consistent experience

## Project Roadmap

### Phase 1: Design Mode (Current)

- Complete all front-end pages
- Refine UI/UX
- Optimize performance
- Improve accessibility

### Phase 2: Backend Integration (Future)

- Set up backend services
- Implement user authentication
- Create product database
- Integrate payment processing

### Phase 3: Launch Preparation (Future)

- Final testing
- SEO optimization
- Analytics implementation
- Launch preparation

## Implementation Notes

### Using Advanced Animations

The website uses several advanced animation techniques that require no JavaScript libraries:

- **Split Text Animation**: Text is split into individual characters or words for staggered animations
- **Parallax Effect**: Elements move at different speeds during scrolling for depth
- **Intersection Observer**: Used for efficiently triggering animations when elements enter the viewport
- **CSS Variables**: Used for consistent timing and easing functions

### Magazine-Style Layouts

For editorial sections, we use CSS Grid to create magazine-style layouts with:

- Feature images with captions
- Sidebar content areas
- Balanced asymmetrical grids
- Interactive hotspots for product showcases

### Performance Considerations

Despite the rich visual effects, performance remains a priority:

- Animations are triggered only when elements are in view
- CSS transforms and opacity are used for smoother animations
- `will-change` property is used selectively for optimized rendering
- Image treatments are applied using CSS rather than pre-processing images

## License

© 2025 Lionel Bamford. All rights reserved.
