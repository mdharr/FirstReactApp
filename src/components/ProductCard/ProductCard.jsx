// src/components/ProductCard/ProductCard.jsx
import PropTypes from 'prop-types'
import PriceDisplay from '../PriceDisplay'
import RatingStars from '../RatingStars'
import ProductActions from '../ProductActions'
import SaleBadge from '../SaleBadge'

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    console.log('Added to cart:', product.name)
  }

  const handleWishlist = () => {
    console.log('Added to wishlist:', product.name)
  }

//   const calculateDiscount = (original, current) => {
//     return Math.round(((original - current) / original) * 100)
//   }

  return (
    <div className="max-w-sm border rounded-lg shadow-lg overflow-hidden">
      {/* Product Image and Sale Badge */}
      <div className="relative">
        <img 
        //   src={product.imageUrl} 
          src={'https://media.wired.com/photos/66abec9ccb172c2e5de763bf/master/w_960,c_limit/Edifier-Stax-Spirit-S5-Headphones-Offwhite-Background-SOURCE-Amazon.jpg'} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.onSale && (
        //   <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded">
        //     {calculateDiscount(product.originalPrice, product.currentPrice)}% OFF
        //   </div>
          <SaleBadge 
              originalPrice={product.originalPrice}
              currentPrice={product.currentPrice}
          />
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        
        {/* Price Section */}
        {/* <div className="flex items-center mb-4">
          <span className="text-xl font-bold">${product.currentPrice}</span>
          {product.onSale && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div> */}

        <PriceDisplay 
          currentPrice={product.currentPrice}
          originalPrice={product.originalPrice}
          onSale={product.onSale}
        />

        {/* Rating Section */}
        {/* <div className="flex items-center mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-5 h-5 ${
                  star <= product.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            ({product.reviewCount} reviews)
          </span>
        </div> */}
        <RatingStars 
          rating={product.rating}
          reviewCount={product.reviewCount}
        />

        {/* Action Buttons */}
        {/* <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
          <button className="px-4 py-2 border rounded hover:bg-gray-50">
            ♡
          </button>
        </div> */}
        <ProductActions 
          onAddToCart={handleAddToCart}
          onWishlist={handleWishlist}
          productName={product.name}
        />
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    currentPrice: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    onSale: PropTypes.bool,
    rating: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired
  }).isRequired
}

export default ProductCard