import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';

export const DocumentPage = () => {
  return (
    <article className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
      <img 
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        alt="The Future of Web Development"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          
            <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"> AI </span>
            <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"> CS </span>
            <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"> Blockchain </span>

        </div>
        <h2 className="text-xl font-bold text-white mb-2">
          <Link className="hover:text-blue-400">
          "The Future of Web Development"
          </Link>
        </h2>
        <p className="text-gray-400 mb-4">'A comprehensive guide to using React Hooks effectively in your applications.'</p>
        <div className="flex items-center text-gray-400 text-sm">
          <User size={16} className="mr-2" />
          <span className="mr-4">'Michael Chen'</span>
          <Clock size={16} className="mr-2" />
        </div>
      </div>
    </article>
  );
};