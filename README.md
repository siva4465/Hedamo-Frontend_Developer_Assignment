# Hedamo - Product Showcase

A modern, responsive product showcase application built with Next.js and Tailwind CSS, featuring a card-based design inspired by Samsung Weather's modular UI.

## 🚀 Features

- **Card-Based Design**: Modular product information display with individual cards for different aspects
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Elements**: Smooth animations, hover effects, and micro-interactions
- **Search & Filter**: Real-time product search and category filtering
- **Product Details Modal**: Comprehensive product information with tabbed navigation
- **Traceability**: Complete product origin and certification tracking
- **Modern UI/UX**: Clean design with premium aesthetics and smooth transitions

## 🛠 Tech Stack

- **Framework**: Next.js 13.5.1
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Static export optimized for GitHub Pages

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd hedamo-product-showcase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 🚀 Deployment to GitHub Pages

This project is configured for static export and GitHub Pages deployment.

### Automated Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as source
   - The site will automatically deploy on pushes to main branch

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   - The built files will be in the `out` directory
   - Push the `out` directory contents to `gh-pages` branch

## 📁 Project Structure

```
hedamo-product-showcase/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ProductCard.tsx
│   ├── ProductModal.tsx
│   └── SearchBar.tsx
├── data/
│   └── products.json
├── lib/
│   └── utils.ts
└── public/
```

## 🎨 Design Features

### Card-Based Architecture
- **Product Overview Card**: Features, pricing, and basic info
- **Nutrition Card**: Detailed nutritional information
- **Traceability Card**: Origin, certification, and batch details
- **Reviews Card**: Customer feedback and ratings
- **Benefits Card**: Health and sustainability benefits

### Responsive Breakpoints
- **Mobile**: < 768px - Single column layout
- **Tablet**: 768px - 1024px - Two column grid
- **Desktop**: > 1024px - Three column grid

### Interactive Elements
- **Hover Effects**: Smooth card elevation and image scaling
- **Loading States**: Skeleton loading for images
- **Micro-interactions**: Button animations and state changes
- **Smooth Transitions**: All state changes include smooth animations

## 📊 Product Data Structure

```json
{
  "id": 1,
  "name": "Product Name",
  "image": "image-url",
  "category": "Category",
  "price": "$XX.XX",
  "description": "Product description",
  "features": ["feature1", "feature2"],
  "nutrition": {
    "calories": 70,
    "sugar": "15g"
  },
  "traceability": {
    "origin": "Location",
    "certification": "Cert Type"
  },
  "reviews": [
    {
      "name": "Reviewer",
      "rating": 5,
      "comment": "Review text"
    }
  ],
  "benefits": ["benefit1", "benefit2"]
}
```

## 🔧 Customization

### Adding New Products
1. Edit `data/products.json`
2. Add new product objects following the structure above
3. Images should be hosted externally (Pexels URLs used by default)

### Styling Modifications
- Colors: Modify CSS variables in `app/globals.css`
- Components: Edit individual component files in `components/`
- Layout: Adjust grid systems in `app/page.tsx`

## 🧪 Testing & Quality

- **Responsive Design**: Tested across multiple device sizes
- **Performance**: Optimized images and lazy loading
- **Accessibility**: Alt texts, keyboard navigation, and ARIA labels
- **SEO**: Proper meta tags and semantic HTML structure

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔄 GitHub Actions Workflow

The project includes automatic deployment via GitHub Actions:

```yaml
# Automatically deploys to GitHub Pages on push to main
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
```

## 📈 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Bundle Splitting**: Automatic code splitting by Next.js
- **Static Generation**: Pre-rendered pages for faster loading
- **CSS Optimization**: Tailwind CSS purging for minimal bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for the Hedamo Frontend Developer Assignment.

---

**Live Demo**: [Your GitHub Pages URL will be here after deployment]

**Repository**: [Your GitHub Repository URL]

For questions or support, please create an issue in the GitHub repository.