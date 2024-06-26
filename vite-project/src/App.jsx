import Whatsapp from "./Whatsapp"

const title = <h1>Vite app title</h1>

function App() {

  return (
    <>
    {title}
    <title></title>
    <h3> vite App Component</h3>
    <Whatsapp />
    {Whatsapp()}
    </>
  )
}

export default App
