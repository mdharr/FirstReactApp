import PropTypes from 'prop-types'

const PriceDisplay = ({ currentPrice, originalPrice, onSale }) => {
  return (
    <div className="flex items-center mb-4">
      <span className="text-xl font-bold">${currentPrice}</span>
      {onSale && (
        <span className="ml-2 text-sm text-gray-500 line-through">
          ${originalPrice}
        </span>
      )}
    </div>
  )
}

PriceDisplay.propTypes = {
  currentPrice: PropTypes.number.isRequired,
  originalPrice: PropTypes.number,
  onSale: PropTypes.bool
}

export default PriceDisplay