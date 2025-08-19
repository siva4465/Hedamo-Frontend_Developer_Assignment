"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Star, Eye } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  price: string;
  description: string;
  features: string[];
}

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
        )}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
            {product.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {product.price}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {product.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="bg-green-50 text-green-700 px-2 py-1 rounded-lg text-xs font-medium"
            >
              {feature}
            </span>
          ))}
          {product.features.length > 3 && (
            <span className="text-gray-400 text-xs font-medium">
              +{product.features.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="ml-2 text-sm text-gray-600">4.8</span>
          </div>

          <button
            onClick={() => onViewDetails(product)}
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium group/btn"
          >
            <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            <span>View Details</span>
          </button>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}