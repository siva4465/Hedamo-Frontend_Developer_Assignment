"use client";

import { Search, Filter } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
}

export default function SearchBar({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories
}: SearchBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm"
        />
      </div>
      <div className="relative">
        <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="pl-12 pr-8 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm appearance-none cursor-pointer min-w-[140px]"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}