import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [count,setCount] = useState(0)

  const increment = () => {
    
    if(count < 100){
      setCount(count + 1);
    }
    else{
      alert("You have reached the maximum count of 100")
    }

  }
  const decrement = () => {
    if(count > 0){
      setCount(count - 1);
    }
    else{
      alert("You have reached the minimum count of 0")
    }
  }

 

  return (
    <>
    <h2 className='heading'>Counter App</h2>
      <div className="App">
        <div className="card">
          <span>{count}</span>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
      
    </>
  )
}

export default App
