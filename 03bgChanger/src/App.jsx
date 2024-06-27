import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('orange')

  return (
    <div className="w-full h-screen bg-orange-600 duration-500" style={{backgroundColor: color}}>
      <div className="flex flex-wrap justify-center inset-x-0 px-2 bottom-12 fixed">
        <div className='bg-white flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl'>
          <button 
          onClick={() => setColor('blue')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          style={{backgroundColor: 'blue'}}
          >Blue</button>

          <button 
          onClick={() => setColor('red')}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          style={{backgroundColor: 'red'}}
          >Red</button>
        </div>
      </div>
    </div>
  )
}

export default App
