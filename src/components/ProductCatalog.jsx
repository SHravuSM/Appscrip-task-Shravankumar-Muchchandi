import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Products from './Products';

const ProductCatalog = ({ products }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    customizable: false,
    dealForAll: true,
    occasion: 'All',
    work: 'All',
    fabric: 'All',
    segment: 'All',
    suitableFor: 'All',
    rawMaterials: 'All',
    pattern: 'All'
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      // backgroundColor: '#caaccf'
      backgroundColor: '#ffffff'
    }}>
      <Header setIsMobileMenuOpen={setIsMobileMenuOpen} isMobileMenuOpen={isMobileMenuOpen} />
      <Products setFavorites={setFavorites} favorites={favorites} setSelectedFilters={setSelectedFilters} selectedFilters={selectedFilters} toggleFavorite={toggleFavorite} />
      <Footer />
    
      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block !important;
          }
          
          .desktop-nav {
            display: none !important;
          }
          
          .main-content {
            flex-direction: column !important;
          }
          
          .filters-sidebar {
            width: 100% !important;
            order: 2;
          }
          
          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)) !important;
            gap: 1rem !important;
          }
          
          .product-card {
            margin-bottom: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .products-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
      `}</style>
    </div>
  );
};

export default ProductCatalog;