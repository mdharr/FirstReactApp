import './App.css'
import Button from './components/Button'

function App() {
  const handleClick = () => {
    alert('Button clicked!')
  }

  return (
    <div className="p-4">
      <h1>My First React App</h1>
      <Button 
        text="Click Me!" 
        onClick={handleClick}
      />
    </div>
  )
}

export default App
