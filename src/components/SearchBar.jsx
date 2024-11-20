import React from 'react';
import { Search } from 'lucide-react';

export const SearchBar = ({ searchTerm, onSearchChange }) => (
  <div className="sticky top-0 z-10 bg-white shadow-md p-4">
    <div className="relative w-1/2 mx-auto">
      <input 
        type="text" 
        placeholder="Search currencies or countries" 
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  </div>
);