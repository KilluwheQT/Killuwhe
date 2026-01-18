'use client';

import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom py-6">
        <p className="text-center text-gray-500 dark:text-gray-500 text-sm flex items-center justify-center gap-1">
          © {currentYear} Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> by Whelster Esmade
        </p>
      </div>
    </footer>
  );
}
