import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="content">
        <img 
          src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" 
          alt="Funny Developer" 
          className="funny-image" 
        />
        <h1 className="heading">Hey Developer! 👨‍💻</h1>
        <p className="text">Why do programmers prefer dark mode?</p>
        <p className="highlight">Because light attracts bugs! 🐞😂</p>
      </div>
    </div>
  )
}

export default App
