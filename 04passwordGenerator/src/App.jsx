import { useState } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = () => {}

  return (
    <div className="w-full max-w-md mx-auto shadow-md">
      <h1 className="text-black-600 text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly
        />
        <button className="outline-none bg-blue-700 text-white px-3
        py-0.5 shrink-0">
        copy</button>

      </div>
      <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name="" 
            id="" 
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
            name="" 
            id="" 
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
            name="" 
            id="" 
            />
            <label htmlFor="charInput">Character</label>
          </div>

      </div>


    </div>
  )
}

export default App
