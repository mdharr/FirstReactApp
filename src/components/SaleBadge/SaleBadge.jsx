import PropTypes from 'prop-types'

const SaleBadge = ({ originalPrice, currentPrice }) => {
  const calculateDiscount = (original, current) => {
    return Math.round(((original - current) / original) * 100)
  }

  const discount = calculateDiscount(originalPrice, currentPrice)

  return (
    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded">
      {discount}% OFF
    </div>
  )
}

SaleBadge.propTypes = {
  originalPrice: PropTypes.number.isRequired,
  currentPrice: PropTypes.number.isRequired
}

export default SaleBadge