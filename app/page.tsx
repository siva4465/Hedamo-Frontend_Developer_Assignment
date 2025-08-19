"use client";

import { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import SearchBar from '@/components/SearchBar';
import { Leaf, Sparkles } from 'lucide-react';
import productsData from '@/data/products.json';

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  price: string;
  description: string;
  features: string[];
  nutrition: Record<string, string | number>;
  traceability: Record<string, string>;
  reviews: Array<{
    name: string;
    rating: number;
    comment: string;
  }>;
  benefits: string[];
}

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const products = productsData as Product[];
  const categories = useMemo(() => {
    const cats = products.map(p => p.category);
    return [...new Set(cats)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="relative">
              <Leaf className="w-8 h-8 text-green-600" />
              <Sparkles className="w-4 h-4 text-yellow-500 absolute -top-1 -right-1" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Hedamo
            </h1>
          </div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Discover premium organic products with complete traceability. 
            Each product tells a story of quality, sustainability, and care.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
        />

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
            {selectedCategory && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${filteredProducts.indexOf(product) * 100}ms` }}
              >
                <ProductCard
                  product={product}
                  onViewDetails={handleViewDetails}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-white/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Leaf className="w-6 h-6 text-green-600" />
            <span className="text-xl font-bold text-gray-900">Hedamo</span>
          </div>
          <p className="text-gray-600 max-w-md mx-auto">
            Premium organic products with complete traceability and sustainable sourcing.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            © 2024 Hedamo. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}