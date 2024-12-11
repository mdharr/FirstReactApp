import ProductCard from './components/ProductCard/ProductCard'

function App() {
  const sampleProduct = {
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    imageUrl: "/api/placeholder/400/320",
    currentPrice: 79.99,
    originalPrice: 119.99,
    onSale: true,
    rating: 4,
    reviewCount: 128
  }

  return (
    <div className="p-8">
      <ProductCard product={sampleProduct} />
    </div>
  )
}

export default App
