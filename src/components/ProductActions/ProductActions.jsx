import PropTypes from 'prop-types'

const ProductActions = ({ onAddToCart, onWishlist, productName }) => {
  const handleAddToCart = () => {
    onAddToCart(productName)
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={handleAddToCart}
        className="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
      <button 
        onClick={onWishlist}
        className="px-4 py-2 border rounded hover:bg-gray-50"
      >
        ♡
      </button>
    </div>
  )
}

ProductActions.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
  onWishlist: PropTypes.func.isRequired,
  productName: PropTypes.string.isRequired
}

export default ProductActions