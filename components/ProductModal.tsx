"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Star, MapPin, Calendar, Award, Shield, Leaf, Heart } from 'lucide-react';

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

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!product || !isOpen) return null;

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-100px)]">
          {/* Hero Section */}
          <div className="p-6">
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium w-fit mb-4">
                  {product.category}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {product.description}
                </p>
                <div className="text-3xl font-bold text-green-600 mb-6">{product.price}</div>
                <div className="flex items-center mb-6">
                  <div className="flex">{renderStars(5)}</div>
                  <span className="ml-2 text-gray-600">4.8 (128 reviews)</span>
                </div>
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors w-fit">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="px-6 mb-8">
            <div className="flex space-x-1 bg-gray-100 rounded-xl p-1">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'nutrition', label: 'Nutrition' },
                { id: 'traceability', label: 'Traceability' },
                { id: 'reviews', label: 'Reviews' },
                { id: 'benefits', label: 'Benefits' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-white text-green-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Card-based Content */}
          <div className="px-6 pb-8">
            <div className="grid gap-6">
              {activeTab === 'overview' && (
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <Leaf className="w-8 h-8 text-green-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Product Features</h3>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product.features.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/90 transition-colors"
                      >
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                          <span className="font-medium text-gray-800">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'nutrition' && (
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <Heart className="w-8 h-8 text-orange-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Nutritional Information</h3>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(product.nutrition).map(([key, value]) => (
                      <div
                        key={key}
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/90 transition-colors"
                      >
                        <div className="text-2xl font-bold text-gray-900 mb-2">{value}</div>
                        <div className="text-gray-600 capitalize font-medium">
                          {key.replace('_', ' ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'traceability' && (
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Traceability & Origin</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(product.traceability).map(([key, value]) => (
                      <div
                        key={key}
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/90 transition-colors"
                      >
                        <div className="flex items-start">
                          <div className="mr-4 mt-1">
                            {key === 'origin' && <MapPin className="w-5 h-5 text-blue-600" />}
                            {key === 'harvest_date' && <Calendar className="w-5 h-5 text-blue-600" />}
                            {key === 'certification' && <Award className="w-5 h-5 text-blue-600" />}
                            {!['origin', 'harvest_date', 'certification'].includes(key) && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                            )}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 capitalize mb-1">
                              {key.replace('_', ' ')}
                            </div>
                            <div className="text-gray-600">{value}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <Star className="w-8 h-8 text-yellow-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Customer Reviews</h3>
                  </div>
                  <div className="space-y-6">
                    {product.reviews.map((review, index) => (
                      <div
                        key={index}
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/90 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="font-semibold text-gray-900">{review.name}</div>
                          <div className="flex">{renderStars(review.rating)}</div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'benefits' && (
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <Heart className="w-8 h-8 text-purple-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Health Benefits</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/90 transition-colors"
                      >
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-purple-500 rounded-full mr-4" />
                          <span className="font-medium text-gray-800">{benefit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}